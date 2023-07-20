const $ = (id) => document.getElementById(id)

const descargarMeme = () => {
  domtoimage.toBlob($('meme-modelo')).then(function (blob) {
    saveAs(blob, 'mi-meme.png')
  })
}

/*Tema*/
const cambiarModoClaro = () => {
  document.body.classList.remove('dark-theme')
  document.body.classList.add('light-theme')
}

const cambiarModoOscuro = () => {
  document.body.classList.remove('light-theme')
  document.body.classList.add('dark-theme')
}

/*Imagen*/
const actualizarImagen = (evento) => {
  if (evento.target.value.length !== 0) {
    $('meme-imagen').style.backgroundImage = `url("${evento.target.value}")`
  }
}

const actualizarColorMezcla = (evento) => {
  $('blend-mode-color').innerText = evento.target.value.toUpperCase()
  $('meme-imagen').style.backgroundColor = evento.target.value
}

const actualizarTipoMezcla = (evento) => {
  $('meme-imagen').style.backgroundBlendMode = evento.target.value
}

const actualizarFiltros = () => {
  const grayscale = $('grayscale-slider').value
  const hue = $('hue-slider').value
  const sepia = $('sepia-slider').value
  const saturate = $('saturate-slider').value
  const invert = $('invert-slider').value
  const brightness = $('brightness-slider').value
  const opacity = $('opacity-slider').value
  const blur = $('blur-slider').value
  const contrast = $('contrast-slider').value

$('meme-imagen').style.filter = `brightness(${brightness}) opacity(${opacity}) blur(${blur}px) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hue}deg) sepia(${sepia}%) saturate(${saturate}%) invert(${invert})`
}

const reestrablecerFiltros = () => {
  $('blur-slider').value = 0
  $('grayscale-slider').value = 0
  $('hue-slider').value = 0
  $('sepia-slider').value = 0
  $('invert-slider').value = 0
  $('brightness-slider').value = 1
  $('opacity-slider').value = 1
  $('saturate-slider').value = 100
  $('contrast-slider').value = 100

  actualizarFiltros()
}

const ajustarImagen = () => {
  $('meme-modelo').style.height = `${
    $('meme-modelo').getBoundingClientRect().width
  }px`
}

/*Texto*/
const actualizarTextos = () => {
  $('top-text').innerText = $('top-text-input').value
  $('bottom-text').innerText = $('bottom-text-input').value
}

const alternarTextos = () => {
  if ($('no-top-text-checkbox').checked) {
    $('top-text').classList.add('oculto')
  } else {
    $('top-text').classList.remove('oculto')
  }
  if ($('no-bottom-text-checkbox').checked) {
    $('bottom-text').classList.add('oculto')
  } else {
    $('bottom-text').classList.remove('oculto')
  }
}

const alinearTexto = (alineacion) => {
  $('top-text').style.textAlign = alineacion
  $('bottom-text').style.textAlign = alineacion
}

const actualizarFuente = () => {
  const fuente = $('text-font-select').value
  $('top-text').style.fontFamily = fuente
  $('bottom-text').style.fontFamily = fuente
}

const actualizarTamanioTexto = () => {
  const tamanio = $('text-size-input').value
  $('top-text').style.fontSize = `${tamanio}px`
  $('bottom-text').style.fontSize = `${tamanio}px`
}

const actualizarColorTexto = () => {
  const color = $('text-color-input').value.toUpperCase()
  $('text-color').innerText = color
  $('top-text').style.color = color
  $('bottom-text').style.color = color
}

const actualizarPosicionTexto = () => {
  if ($('text-no-background-checkbox').checked) {
    $('top-text').style.position = 'absolute'
    $('bottom-text').style.position = 'absolute'
  } else {
    $('top-text').style.position = 'static'
    $('bottom-text').style.position = 'static'
  }
}

const actualizarFondoTexto = () => {
  if (!$('text-no-background-checkbox').checked) {
    const color = $('text-background-color-input').value
    $('text-background-color').innerText = color.toUpperCase()
    $('top-text').style.backgroundColor = color
    $('bottom-text').style.backgroundColor = color
  } else {
    $('top-text').style.backgroundColor = 'transparent'
    $('bottom-text').style.backgroundColor = 'transparent'
  }
}

const actualizarContorno = (contorno) => {
  const grosor = '2px'
  if (contorno === 'ninguno') {
    $('top-text').style.textShadow = 'none'
    $('bottom-text').style.textShadow = 'none'
  } else if (contorno === 'claro') {
    $(
      'top-text'
    ).style.textShadow = `${grosor} ${grosor} #FFF, -${grosor} ${grosor} #FFF, ${grosor} -${grosor} #FFF, -${grosor} -${grosor} #FFF`
    $(
      'bottom-text'
    ).style.textShadow = `${grosor} ${grosor} #FFF, -${grosor} ${grosor} #FFF, ${grosor} -${grosor} #FFF, -${grosor} -${grosor} #FFF`
  } else if (contorno === 'oscuro') {
    $(
      'top-text'
    ).style.textShadow = `${grosor} ${grosor} #000, -${grosor} ${grosor} #000, ${grosor} -${grosor} #000, -${grosor} -${grosor} #000`
    $(
      'bottom-text'
    ).style.textShadow = `${grosor} ${grosor} #000, -${grosor} ${grosor} #000, ${grosor} -${grosor} #000, -${grosor} -${grosor} #000`
  }
}

const actualizarInterlineado = () => {
  const lineHeight = $('line-height-input').value
  $('top-text').style.lineHeight = lineHeight
  $('bottom-text').style.lineHeight = lineHeight
}

const actualizarEspaciado = () => {
  const paddingY = $('padding-input').value
  $('top-text').style.padding = `${paddingY}px 50px`
  $('bottom-text').style.padding = `${paddingY}px 50px`
}

const ajustarTexto = () => {
  if (window.innerWidth > 1100) {
    return
  }

  const tamanioTexto = Math.round((window.innerWidth / 10) * 0.5)
  const padding = Math.round((window.innerWidth / 10) * 0.2)

  $('text-size-input').value = tamanioTexto
  $('padding-input').value = padding

  actualizarEspaciado()
  actualizarTamanioTexto()
}

/*Paneles*/
const ocultarPanel = () => {
  $('panel').classList.add('oculto')
}
const mostrarPanel = () => {
  $('panel').classList.remove('oculto')
}
const mostrarPanelTexto = () => {
  $(`imagen-panel`).classList.add('oculto')
  $(`panel-text`).classList.remove('oculto')
}
const mostrarPanelImagen = () => {
  $(`panel-text`).classList.add('oculto')
  $(`imagen-panel`).classList.remove('oculto')
}

/*Inicios*/
const inicializarTemas = () => {
  $('dark-theme-button').addEventListener('click', cambiarModoClaro)
  $('light-theme-button').addEventListener('click', cambiarModoOscuro)
}

const inicializarPaneles = () => {
  $('imagen-panel-button').addEventListener('click', () => {
    mostrarPanelImagen()
    mostrarPanel()
  })
  $('text-panel-button').addEventListener('click', () => {
    mostrarPanelTexto()
    mostrarPanel()
  })
  $('panel-close-button').addEventListener('click', ocultarPanel)
}

const inicializarImagen = () => {
  $('url-img-input').addEventListener('input', actualizarImagen)
  $('blend-mode-color-input').addEventListener('input', actualizarColorMezcla)
  $('blend-mode-select').addEventListener('change', actualizarTipoMezcla)
  $('hue-slider').addEventListener('change', actualizarFiltros)
  $('sepia-slider').addEventListener('change', actualizarFiltros)
  $('saturate-slider').addEventListener('change', actualizarFiltros)
  $('invert-slider').addEventListener('change', actualizarFiltros)
  $('brightness-slider').addEventListener('change', actualizarFiltros)
  $('contrast-slider').addEventListener('change', actualizarFiltros)
  $('grayscale-slider').addEventListener('change', actualizarFiltros)
  $('opacity-slider').addEventListener('change', actualizarFiltros)
  $('blur-slider').addEventListener('change', actualizarFiltros)
  $('default-filters-button').addEventListener('click', reestrablecerFiltros)
  window.addEventListener('resize', ajustarImagen)
}

const inicializarTexto = () => {
  $('no-top-text-checkbox').addEventListener('change', alternarTextos)
  $('no-bottom-text-checkbox').addEventListener('change', alternarTextos)
  $('top-text-input').addEventListener('input', actualizarTextos)
  $('bottom-text-input').addEventListener('input', actualizarTextos)
  $('text-font-select').addEventListener('change', actualizarFuente)
  $('text-size-input').addEventListener('input', actualizarTamanioTexto)
  $('text-left-align-button').addEventListener('click', () =>
    alinearTexto('left'))
  $('text-center-align-button').addEventListener('click', () =>
    alinearTexto('center'))
  $('text-right-align-button').addEventListener('click', () =>
    alinearTexto('right'))
  $('text-color-input').addEventListener('input', actualizarColorTexto)
  $('text-background-color-input').addEventListener(
    'input', actualizarFondoTexto)
  $('text-no-background-checkbox').addEventListener('change', () => {
    actualizarFondoTexto()
    actualizarPosicionTexto()
  })
  $('no-outline-button').addEventListener('click', () => {
    actualizarContorno('ninguno')
  })
  $('dark-outline-button').addEventListener('click', () => {
    actualizarContorno('oscuro')
  })
  $('light-outline-button').addEventListener('click', () => {
    actualizarContorno('claro')
  })  
  $('padding-input').addEventListener('input', actualizarEspaciado)
  $('line-height-input').addEventListener('change', actualizarInterlineado)

  window.addEventListener('resize', ajustarTexto)
}

const inicializarValoresDefault = () => {
  ajustarImagen()
  actualizarFuente()
  actualizarColorTexto()
  actualizarFondoTexto()
  actualizarPosicionTexto()
  ajustarTexto()
}

const inicializar = () => {
  inicializarTemas()
  inicializarPaneles()
  inicializarImagen()
  inicializarTexto()
  inicializarValoresDefault()

  $('download-meme-button').addEventListener('click', descargarMeme)
}

window.onload = inicializar
