// 定义一个函数，将十六进制颜色值转换为 HSL 格式
export function hexToHSL(hex) {
  // 去掉 # 符号
  hex = hex.replace(/^#/, '');

  // 将十六进制颜色值转换为 RGB 格式
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // 计算最小值和最大值
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  // 计算亮度（Lightness）
  const lightness = (min + max) / 2;

  let hue = 0;
  let saturation = 0;

  // 计算饱和度（Saturation）
  if (min !== max) {
    const delta = max - min;
    saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    switch (max) {
      case r:
        hue = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
        break;
      case g:
        hue = ((b - r) / delta + 2) * 60;
        break;
      case b:
        hue = ((r - g) / delta + 4) * 60;
        break;
      default:
        break;
    }
  }

  return {
    hue: Math.round(hue),
    saturation: Math.round(saturation * 100) + '%', // 转换为百分比
    lightness: Math.round(lightness * 100) + '%', // 转换为百分比
  };
}
