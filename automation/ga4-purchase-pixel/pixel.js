// =============================================================
// BY RITUEL — GA4 purchase pixel for Shopify Customer Events
// Paste this into: Shopify Admin → Settings → Customer events
//                  → Add custom pixel → Code
// Permission required: Permission > "Not required" (lax mode)
// =============================================================

const GA4_MEASUREMENT_ID = "G-547FPGHNXW";
const GA4_API_SECRET = "REPLACE_ME"; // GA4 Admin → Data Streams → Measurement Protocol API secret

function send(eventName, params, clientId) {
  const url =
    "https://www.google-analytics.com/mp/collect" +
    "?measurement_id=" + encodeURIComponent(GA4_MEASUREMENT_ID) +
    "&api_secret=" + encodeURIComponent(GA4_API_SECRET);

  const body = {
    client_id: clientId || (Math.random().toString(36).slice(2) + "." + Date.now()),
    events: [{ name: eventName, params: params }]
  };

  // navigator.sendBeacon survives the page unload that follows a purchase
  try {
    const blob = new Blob([JSON.stringify(body)], { type: "application/json" });
    if (!navigator.sendBeacon || !navigator.sendBeacon(url, blob)) {
      fetch(url, { method: "POST", body: JSON.stringify(body), keepalive: true });
    }
  } catch (e) {
    // best-effort — never block the customer's checkout
  }
}

// Pull GA4 client_id from the _ga cookie if available so events stitch to the
// same user that browsed the storefront.
function readClientId() {
  try {
    const m = (document.cookie || "").match(/_ga=GA\d\.\d\.(\d+\.\d+)/);
    return m ? m[1] : null;
  } catch (e) { return null; }
}

// ── checkout_completed → purchase ─────────────────────────────
analytics.subscribe("checkout_completed", (event) => {
  const c = event.data.checkout || {};
  const items = (c.lineItems || []).map((li) => ({
    item_id: String(li.variant && li.variant.product && li.variant.product.id || ""),
    item_name: (li.variant && li.variant.product && li.variant.product.title) || li.title || "",
    item_variant: (li.variant && li.variant.title) || "",
    price: parseFloat((li.variant && li.variant.price && li.variant.price.amount) || 0),
    quantity: li.quantity || 1
  }));

  send("purchase", {
    transaction_id: c.order && c.order.id ? String(c.order.id) : (c.token || ""),
    value: parseFloat((c.totalPrice && c.totalPrice.amount) || 0),
    tax: parseFloat((c.totalTax && c.totalTax.amount) || 0),
    shipping: parseFloat((c.shippingLine && c.shippingLine.price && c.shippingLine.price.amount) || 0),
    currency: (c.totalPrice && c.totalPrice.currencyCode) || "USD",
    coupon: ((c.discountApplications || [])[0] || {}).title || "",
    items: items
  }, readClientId());
});

// ── checkout_started → begin_checkout (server-side backup) ─────
analytics.subscribe("checkout_started", (event) => {
  const c = event.data.checkout || {};
  const items = (c.lineItems || []).map((li) => ({
    item_id: String(li.variant && li.variant.product && li.variant.product.id || ""),
    item_name: (li.variant && li.variant.product && li.variant.product.title) || li.title || "",
    quantity: li.quantity || 1
  }));
  send("begin_checkout", {
    value: parseFloat((c.totalPrice && c.totalPrice.amount) || 0),
    currency: (c.totalPrice && c.totalPrice.currencyCode) || "USD",
    items: items
  }, readClientId());
});

// ── product_added_to_cart → add_to_cart (server-side backup) ───
analytics.subscribe("product_added_to_cart", (event) => {
  const li = event.data.cartLine || {};
  const v = li.merchandise || {};
  send("add_to_cart", {
    value: parseFloat((v.price && v.price.amount) || 0) * (li.quantity || 1),
    currency: (v.price && v.price.currencyCode) || "USD",
    items: [{
      item_id: String(v.product && v.product.id || ""),
      item_name: (v.product && v.product.title) || "",
      item_variant: v.title || "",
      price: parseFloat((v.price && v.price.amount) || 0),
      quantity: li.quantity || 1
    }]
  }, readClientId());
});
