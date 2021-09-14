const template = ({ address, balance }) => `
  <div class="address">
    Address: ${address}
  </div>
  <div class="balance">
    VeggieTokenBalance: ${balance}
  </div>
  <div class="logout" id="logout">
    Logout
  </div>
  <div class="NFTs">
    NFT:
      </div>
`;

export default (templateVars, logoutHandler) => {
  const html = template(templateVars);
  document.getElementById("account").innerHTML = html;

  document.getElementById("logout").addEventListener("click", () => {
    document.getElementById("account").innerHTML = "";
    logoutHandler();
  });
}
