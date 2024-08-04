export function convertCentToEuro(cent: number) {
  const euro = cent / 100;
  const euroNumberFormat = euro.toLocaleString('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${euroNumberFormat}€`;
}
