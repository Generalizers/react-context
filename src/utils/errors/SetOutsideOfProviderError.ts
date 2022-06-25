export class SetOutsideOfProviderError extends Error {
  constructor(displayName?: string) {
    super(displayName);
    this.message = `${
      displayName ? displayName + ' c' : 'C'
    }ontext state cannot be set outside of a provider`;
    this.name = 'SetOutsideOfProviderError';
  }
}
