export function formatAddress(address: string) {
  if (address.length <= 10) {
    return address;
  }

  const prefix = address.slice(0, 4);
  const suffix = address.slice(-4);
  return `${prefix}...${suffix}`;
}
