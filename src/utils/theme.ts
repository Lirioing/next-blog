const themesObj: any = {
  default: {
    primary: '#007fff',
    success: ' #67C23A',
    warning: '#E6A23C',
    danger: '#F56C6C',
    info: '#909399',
    black: '#000000',
    white: '#ffffff',
    'primary-text': '#303133',
    'secondary-text': '#909399',
    placeholder: '#c0c4cc',
    'border-base': '#dcdfe6',
    'border-linght': '#e4e7ed',
    'bg-black': '#000000',
    'bg-white': '#fff'
  },
  black: {
    primary: 'red',
    success: ' #67C23A',
    warning: '#E6A23C',
    danger: '#F56C6C',
    info: '#909399',
    black: '#000000',
    white: '#ffffff',
    'primary-text': '#303133',
    'secondary-text': '#909399',
    placeholder: '#c0c4cc',
    'border-base': '#dcdfe6',
    'border-linght': '#e4e7ed',
    'bg-black': '#000000',
    'bg-white': '#fff'
  }
}
function setTheme (theme: string): void {
  let colors = themesObj[theme]
  localStorage.setItem('theme', theme)
  for (let key in colors) {
    document.body.style.setProperty(`--${key}`, colors[key])
  }
}
function getTheme (): void {
  let theme: string = localStorage.getItem('theme') || 'default'
  setTheme(theme)
}
export { getTheme, setTheme }
