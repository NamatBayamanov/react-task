const exachangeRates = {
    USDKGS: 89,
    EURKGS: 100,
}


export function getCurs(pair) {

  return exachangeRates[pair];
}