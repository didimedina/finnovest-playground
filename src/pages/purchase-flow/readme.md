# Purchase Flow Prototype

A mobile trading flow prototype demonstrating stock purchase interactions with market and limit orders.

## What it does

- **Stock purchase UI**: Allows users to enter an amount to invest in a stock (AAPL)
- **Market vs Limit orders**: Toggle between market orders (immediate execution) and limit orders (price-conditional)
- **Orchestrated trades**: Fund purchases by selling other positions (MSFT, TSLA, GOOGL, AMZN) or using cash
- **Threshold warnings**: Shows warnings when trade amounts exceed configurable thresholds, prompting switch to limit orders

## Key interactions

1. **Amount entry**: Enter a dollar amount to see estimated shares
2. **Mode toggle**: Switch between Market and Limit order types
3. **Threshold warning**: Amounts over $5,000 trigger a warning banner with a "Switch to Limit" CTA
4. **Orchestration toggle**: Enable "Fund with other positions" to add multiple funding sources
5. **Funding sources**: Add cash or sell existing positions (with individual threshold validation)
6. **Expiry selection**: Choose order expiration time (1h, 4h, 12h, 24h) for limit orders
7. **Condition summary**: Dynamic text explaining exactly what will happen when order executes

## States

- **Default**: Empty input, waiting for amount
- **Valid market**: Amount entered below threshold, ready to review
- **Warning**: Amount exceeds threshold, must switch to limit or reduce amount
- **Limit mode**: Price-conditional order with shares and limit price inputs
- **Orchestrated**: Multiple funding sources configured with summary totals

## Assumptions

- Stock price for AAPL is fixed at $178.32
- Market threshold for AAPL is $5,000
- Each stock has its own threshold (MSFT: $5k, TSLA: $4k, GOOGL: $6k, AMZN: $5.5k)
- Cash available is $12,450
- Phone frame is 375x780px (iPhone-like viewport)

## Preview

Run `npm run dev` and visit `localhost:4321/purchase-flow`
