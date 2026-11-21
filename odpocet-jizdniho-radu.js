const platnost = new Date("2026-12-13T00:00:00");

function odpocet_jizdniho_radu()
{
  const odpocet = Math.floor((platnost - new Date()) / 1000);

  const dny = Math.floor(odpocet / 86400);
  const hodiny = Math.floor((odpocet % 86400) / 3600);
  const minuty = Math.floor((odpocet % 3600) / 60);
  const vteriny = odpocet % 60;

  if (odpocet <= 0) {
    document.getElementById("js-odpocet").textContent = "od 13. 12 2026";
  } else { 
    document.getElementById("js-odpocet").textContent =
      "za " +  dny + "d " + hodiny + "h " + minuty + "m a " + vteriny + "s ";
  }
}

odpocet_jizdniho_radu();
setInterval(odpocet_jizdniho_radu, 1000);
