# GA4 Purchase Pixel — Install instructions

Captures `purchase`, `begin_checkout`, and `add_to_cart` events from
Shopify's checkout (which can't be modified via theme on Basic plan)
and forwards them to GA4 via the Measurement Protocol.

This is a **server-side fallback layer** that complements the
client-side gtag events already firing from `layout/theme.liquid`.

---

## 1. Get the GA4 API secret (one-time, 60 seconds)

1. Open https://analytics.google.com → Admin (gear) → **Data Streams**
2. Click the BY RITUEL stream (G-547FPGHNXW)
3. Scroll to **Measurement Protocol API secrets** → **Create**
4. Nickname: `Shopify Customer Events`
5. Copy the secret value — paste it into `pixel.js` line 9
   replacing `REPLACE_ME`.

## 2. Install the pixel in Shopify

1. Shopify Admin → **Settings** → **Customer events**
2. **Add custom pixel** → Name it `GA4 Server-Side`
3. Permission: **Not required** (lax mode is fine — we don't read PII)
4. Paste the entire contents of `pixel.js` into the **Code** box
5. **Save** → toggle status to **Connected**

## 3. Verify (within 5 minutes)

1. Make a test purchase using the `welcome30` code
2. GA4 → **Reports** → **Realtime** — you should see a `purchase`
   event within ~30 seconds
3. GA4 → **Admin** → **DebugView** for richer event payload inspection

---

## What this captures

| Shopify event | GA4 event | Captured fields |
|---|---|---|
| `checkout_completed` | `purchase` | transaction_id, value, tax, shipping, currency, coupon, items |
| `checkout_started` | `begin_checkout` | value, currency, items |
| `product_added_to_cart` | `add_to_cart` | value, currency, items |

## Why both layers?

| Event | Theme (gtag) | Pixel (server-side) |
|---|---|---|
| `page_view` | ✅ Primary | — |
| `view_item` | ✅ Primary | — |
| `view_item_list` | ✅ Primary | — |
| `add_to_cart` | ✅ Primary | ✅ Backup (catches AJAX from non-storefront contexts) |
| `begin_checkout` | ✅ Primary | ✅ Backup (catches direct checkout starts) |
| `purchase` | ❌ Impossible on Basic plan | ✅ **Only path** |

The `purchase` event is the critical one — without it, GA4 has no
revenue attribution and Meta can't optimize ads against real conversions.

---

## Removing the pixel

Shopify Admin → Settings → Customer events → click pixel → **Remove**.
No theme changes needed.
