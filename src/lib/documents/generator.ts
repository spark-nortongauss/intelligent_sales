export interface GeneratedArtifact { kind: 'xlsx'|'pptx'|'pdf'; path: string; version: number; }

export async function generateROMArtifacts(romId: string, version = 1): Promise<GeneratedArtifact[]> {
  return [
    { kind: 'xlsx', path: `rom/${romId}/v${version}/pricing.xlsx`, version },
    { kind: 'pptx', path: `rom/${romId}/v${version}/proposal.pptx`, version },
    { kind: 'pdf', path: `rom/${romId}/v${version}/proposal.pdf`, version }
  ];
}
