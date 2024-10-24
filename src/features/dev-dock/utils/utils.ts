export const getDimensionsInString = (window: Window) => {
  if (!window) return '';

  const width = window.innerWidth;

  // return as sm, md, lg, xl
  if (width < 576) return 'sm';
  if (width < 768) return 'md';
  if (width < 992) return 'lg';
  return 'xl';
};

interface PerformanceWithMemory extends Performance {
  memory: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
}

export const getCurrentSystemPerformance = (window: Window | null) => {
  if (!window) return null;

  const performance = window.performance as Performance & {
    memory?: { usedJSHeapSize: number; totalJSHeapSize: number };
  };

  // Use performance.now() to track elapsed time in milliseconds
  const cpuUsage = performance.now().toFixed(2); // CPU usage in milliseconds
  const networkUsage = performance.getEntries().length;

  // Convert usedJSHeapSize from bytes to GB
  const ramUsage = performance.memory
    ? (performance.memory.usedJSHeapSize / 1024 ** 3).toFixed(2)
    : NaN;

  return {
    cpuUsage: `${cpuUsage} ms`,
    ramUsage: `${ramUsage} GB`,
    networkUsage,
  };
};

export const getZoomLevelInPercentage = (window: Window) => {
  if (!window) return 100;

  const zoomLevel = Math.round((window.outerWidth / window.innerWidth) * 100);
  return zoomLevel;
};
