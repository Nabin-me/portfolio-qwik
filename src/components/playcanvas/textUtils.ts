export function measureText(text: string, font: string): number {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return 50; // fallback width
    
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  }