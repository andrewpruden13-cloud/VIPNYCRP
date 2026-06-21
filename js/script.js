const DISCORD_INVITE = "https://discord.gg/eBw23a4W";

const STRIPE_MONTHLY_PAYMENT_LINKS = {
  "Bronze VIP": "",
  "Silver VIP": "",
  "Gold VIP": "",
  "Platinum VIP": ""
};

const subscribeButtons = document.querySelectorAll(".subscribe-button");

subscribeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tier = button.dataset.tier;
    const checkoutUrl = STRIPE_MONTHLY_PAYMENT_LINKS[tier];

    if (!checkoutUrl) {
      alert("Stripe payment link not configured yet. Please update js/script.js with your links.");
      return;
    }

    window.open(checkoutUrl, "_blank");
  });
});

const discordLinks = document.querySelectorAll("a[href='discord']");

discordLinks.forEach((anchor) => {
  anchor.href = DISCORD_INVITE;
});
