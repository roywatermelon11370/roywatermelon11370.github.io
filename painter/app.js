var cursorStat = 0;
var canvas;
var canvasContainer;
var canvasBg;
var canvasPre;
var canvasPseudo;
var cursorX;
var cursorY;
var oriCursorX = 0;
var oriCursorY = 0;
var ctx;
var ctxpre;
var ctxbg
var ctxpse;
var thicknesSlider;
var thickness;
var mode;
var textMode;
var scale;
var isEditingPhoto;

// history
var canvasHistory = [];
var currIndex;
var maxIndex;

// color picker
var cursorStat2 = 0;
var cursorStat3 = 0;
var colorBlock;
var colorBlockContainer;
var colorHueContainer;
var colorBlockWidth;
var colorBlockHeight;
var colorHue;
var colorHueWidth;
var colorHueHeight;
var ctx1;
var ctx2;
var colorLabel;
var hue = 'rgba(255, 0, 0, 1)';
var color = 'rgba(0, 0, 0, 1)';
var adaptiveColor = 0;

// shape
var fillType;

// file
var fileSelector;
var fileUploaded;

// text
var isEditingText = 0;
var fontStyleOption;
var fontSizeOption;
var fontStyle;
var fontSize;
var textX;
var textY;

// new 
var newBgColor;
var newWidth;
var newHeight;
var newWidthContainer;
var newHeightContainer;
var newBgColorContainer;
var scaleSlider;
var scaleValue;

function init() {
    // canvas
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d", { willReadFrequently: true });

    canvasPre = document.getElementById("canvas-preview");
    ctxpre = canvasPre.getContext("2d", { willReadFrequently: true });

    canvasBg = document.getElementById("canvas-bg");
    ctxbg = canvasBg.getContext("2d", { willReadFrequently: true });

    canvasPseudo = document.getElementById("canvas-pseudo");
    ctxpse = canvasPseudo.getContext("2d", { willReadFrequently: true });

    canvasContainer = document.getElementById('canvas-container');

    ctxpre.lineJoin = 'round';
    ctxpre.lineCap = 'round';
    ctxpre.strokeStyle = color;
    ctxpre.lineWidth = thickness;

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    ctx.lineWidth = thickness;


    ctxbg.lineJoin = 'round';
    ctxbg.lineCap = 'round';
    ctxbg.strokeStyle = color;
    ctxbg.lineWidth = thickness;

    ctxpse.lineJoin = 'round';
    ctxpse.lineCap = 'round';
    ctxpse.strokeStyle = color;
    ctxpse.lineWidth = thickness;

    ctxbg.fillStyle = "white";
    ctxbg.fillRect(0, 0, canvasBg.width, canvasBg.height);

    ctxpse.drawImage(canvasBg, 0, 0);

    thicknesSlider = document.getElementById("thickness");
    scaleSlider = document.getElementById("scale");

    canvasPre.addEventListener('mousemove', (e) => {
        draw(e);
    });
    canvasPre.addEventListener('mousedown', (e) => {
        cursorX = e.offsetX;
        cursorY = e.offsetY;
        oriCursorX = e.offsetX;
        oriCursorY = e.offsetY;
        cursorStat = true;
        if (mode == 'text') {
            isEditingText = !isEditingText;
            console.log(isEditingText);
            writeText(e);
        }
        else {
            isEditingText = 0;
            draw(e);
        }
    });
    canvasPre.addEventListener('mouseup', (e) => {
        saveCanvas();
        if (mode != 'text' && mode != 'colorize') {
            if (cursorStat) saveHistory();
        }
        cursorStat = false;
    });
    canvasPre.addEventListener('mouseout', (e) => {
        saveCanvas();
        if (mode != 'text' && mode != 'colorize') {
            if (cursorStat) saveHistory();
        }
        cursorStat = false;
    });

    // tool
    mode = 'draw';
    document.querySelectorAll('[name=tool]').forEach(input => input.addEventListener('change', toolChange));
    toolChange(mode);

    // fill type
    fillType = 0;
    document.querySelectorAll('[name=fill-type]').forEach(input => input.addEventListener('change', fillTypeChange));
    fillTypeChange(fillType);

    // slider
    scaleContainer = document.getElementById('scale-slider');
    scaleValue = document.getElementById('scale-value');
    changeThickness(25);
    window.addEventListener('resize', function (event) {
        changeThickness(thickness);
    }, true);

    changeScale(100);
    window.addEventListener('resize', function (event) {
        changeScale(scale);
    }, true);

    // text
    fontStyleOption = document.getElementById('font-style');
    fontSizeOption = document.getElementById('font-size');
    fontSize = fontSizeOption.options[fontSizeOption.selectedIndex].value;
    fontStyle = fontStyleOption.options[fontStyleOption.selectedIndex].value;
    fontSizeOption.addEventListener('change', (e) => {
        fontSize = fontSizeOption.options[fontSizeOption.selectedIndex].value;
        changeFont();
    });
    fontStyleOption.addEventListener('change', (e) => {
        fontStyle = fontStyleOption.options[fontStyleOption.selectedIndex].value;
        changeFont();
    });

    // color picker
    colorBlock = document.getElementById('color-block');
    colorHue = document.getElementById('color-hue');
    colorBlockWidth = colorBlock.offsetWidth;
    colorBlockHeight = colorBlock.offsetHeight;
    colorHueWidth = colorHue.offsetWidth;
    colorHueHeight = colorHue.offsetHeight;
    colorLabel = document.getElementById('color-label');
    ctx1 = colorBlock.getContext("2d", { willReadFrequently: true });
    ctx2 = colorHue.getContext("2d", { willReadFrequently: true });

    colorHueContainer = document.getElementById('color-hue-container');
    colorBlockContainer = document.getElementById('color-block-container');

    colorLabel.style.backgroundColor = "rgba(255, 0, 0, 1)";

    var grad2 = ctx2.createLinearGradient(0, 0, 0, colorHueHeight);
    grad2.addColorStop(0, '#FF0000');
    grad2.addColorStop(0.16666, '#FFFF00');
    grad2.addColorStop(0.33333, '#00FF00');
    grad2.addColorStop(0.5, '#00FFFF');
    grad2.addColorStop(0.66667, '#0000FF');
    grad2.addColorStop(0.83333, '#FF00FF');
    grad2.addColorStop(1, '#FF0000');
    ctx2.fillStyle = grad2;
    ctx2.fillRect(0, 0, colorHueWidth, colorHueHeight);

    fillColorBlock();

    colorHueContainer.addEventListener('mousedown', (e) => {
        cursorStat2 = 1;
        changeHue(e);
    });
    colorHueContainer.addEventListener('mouseup', (e) => {
        cursorStat2 = 0;
        changeHue(e);
    });
    colorHueContainer.addEventListener('mousemove', (e) => {
        changeHue(e);
    });
    colorHueContainer.addEventListener('mouseout', (e) => {
        cursorStat2 = 0;
        changeHue(e);
    });

    colorBlockContainer.addEventListener('mousedown', (e) => {
        cursorStat3 = 1;
        console.log('color block clicked');
        chooseColorFromBlock(e);
    });
    colorBlockContainer.addEventListener('mouseup', (e) => {
        cursorStat3 = 0;
        console.log('color block unclicked up');
        chooseColorFromBlock(e);
    });
    colorBlockContainer.addEventListener('mousemove', (e) => {
        chooseColorFromBlock(e);
    });
    colorBlockContainer.addEventListener('mouseout', (e) => {
        cursorStat3 = 0;
        console.log('color block unclicked out');
        chooseColorFromBlock(e);
    });

    // file selector
    fileSelector = document.getElementById('file-upload');
    fileSelector.addEventListener('change', (event) => {
        fileUploaded = event.target.files;
        handleImage(event);
    });

    // history
    canvasHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    currIndex = 0;
    maxIndex = 0;
    if (currIndex == maxIndex) {
        document.getElementById('redo-btn').disabled = true;
    }
    else document.getElementById('redo-btn').disabled = false;

    if (currIndex == 0) {
        document.getElementById('undo-btn').disabled = true;
    }
    else document.getElementById('undo-btn').disabled = false;

    newWidthContainer = document.getElementById('new-width');
    newHeightContainer = document.getElementById('new-height');
    newBgColorContainer = document.getElementById('new-bg-color');
    newWidth = newWidthContainer.value;
    newHeight = newHeightContainer.value;
    newBgColor = newBgColorContainer.value;

    errMsg = document.getElementById('err-msg');

    document.getElementById('new-width').addEventListener('input', (e) => {
        newWidth = document.getElementById('new-width').value;
        newWidthContainer.classList.remove('form-input-error');
        if (newHeight <= 10000 && newHeight >= 10 && newWidth <= 10000 && newWidth >= 10) { errMsg.innerHTML = ''; document.getElementById('new-blank-btn').disabled = false; }
        if (newWidth > 10000 || newWidth < 10) {
            newWidthContainer.classList.add('form-input-error');
            errMsg.innerHTML = '10000 > value > 10'
            document.getElementById('new-blank-btn').disabled = true;
        }
    });
    document.getElementById('new-height').addEventListener('input', (e) => {
        newHeight = document.getElementById('new-height').value;
        newHeightContainer.classList.remove('form-input-error');
        if (newHeight <= 10000 && newHeight >= 10 && newWidth <= 10000 && newWidth >= 10) { errMsg.innerHTML = ''; document.getElementById('new-blank-btn').disabled = false; }
        if (newHeight > 10000 || newHeight < 10) {
            newHeightContainer.classList.add('form-input-error');
            errMsg.innerHTML = '10000 > value > 10'
            document.getElementById('new-blank-btn').disabled = true;
        }
    });
    document.getElementById('new-bg-color').addEventListener('change', (e) => {
        newBgColor = document.getElementById('new-bg-color').value;
    });
}

function draw(event) {
    if (!cursorStat) return;

    if (mode == 'draw') {
        ctxpre.globalCompositeOperation = "source-over";
        ctx.globalCompositeOperation = "source-over";
        ctxpre.lineJoin = 'round';
        ctxpre.lineCap = 'round';
        ctxpre.strokeStyle = color;
        ctxpre.lineWidth = thickness;

        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;
        ctxpre.beginPath();
        ctxpre.moveTo(cursorX, cursorY);
        ctxpre.lineTo(event.offsetX, event.offsetY);
        ctxpre.stroke();
        [cursorX, cursorY] = [event.offsetX, event.offsetY];
    }
    else if (mode == 'erase') {
        ctxpre.globalCompositeOperation = "destination-out";
        ctx.globalCompositeOperation = "destination-out";
        ctxpre.lineJoin = 'round';
        ctxpre.lineCap = 'round';
        ctxpre.strokeStyle = color;
        ctxpre.lineWidth = thickness;

        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;
        ctx.beginPath();
        ctx.moveTo(cursorX, cursorY);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        [cursorX, cursorY] = [event.offsetX, event.offsetY];
    }
    else if (mode == 'rainbow') {
        ctxpre.globalCompositeOperation = "source-over";
        ctx.globalCompositeOperation = "source-over";
        ctxpre.lineJoin = 'round';
        ctxpre.lineCap = 'round';
        ctxpre.lineWidth = thickness;

        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = color;
        ctx.lineWidth = thickness;
        ctxpre.strokeStyle = 'hsl(' + adaptiveColor + ', 100%, 50%)';
        ctxpre.beginPath();
        ctxpre.moveTo(cursorX, cursorY);
        ctxpre.lineTo(event.offsetX, event.offsetY);
        ctxpre.stroke();
        [cursorX, cursorY] = [event.offsetX, event.offsetY];
        adaptiveColor = (adaptiveColor + 1) % 360;
    }
    else if (mode == 'rect') {
        ctxpre.clearRect(0, 0, canvasPre.offsetWidth, canvasPre.offsetHeight);
        ctxpre.globalCompositeOperation = "source-over";
        ctx.globalCompositeOperation = "source-over";
        ctxpre.lineJoin = 'round';
        ctxpre.lineCap = 'round';

        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        if (fillType == 0) {
            ctxpre.lineWidth = thickness;
            ctxpre.strokeStyle = color;
            ctxpre.beginPath();
            ctxpre.strokeRect(oriCursorX, oriCursorY, cursorX - oriCursorX, cursorY - oriCursorY);
            ctxpre.stroke();
        }
        else {
            ctxpre.fillStyle = color;
            ctxpre.beginPath();
            ctxpre.rect(oriCursorX, oriCursorY, cursorX - oriCursorX, cursorY - oriCursorY);
            ctxpre.fill();
        }
        [cursorX, cursorY] = [event.offsetX, event.offsetY];
    }
    else if (mode == 'triangle') {
        ctxpre.clearRect(0, 0, canvasPre.offsetWidth, canvasPre.offsetHeight);
        ctxpre.globalCompositeOperation = "source-over";
        ctx.globalCompositeOperation = "source-over";
        ctxpre.lineJoin = 'round';
        ctxpre.lineCap = 'round';

        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        if (fillType == 0) {
            ctxpre.lineWidth = thickness;
            ctxpre.strokeStyle = color;
            ctxpre.beginPath();
            ctxpre.moveTo(oriCursorX, cursorY);
            ctxpre.lineTo(oriCursorX + ((cursorX - oriCursorX) / 2), oriCursorY);
            ctxpre.lineTo(cursorX, cursorY);
            ctxpre.lineTo(oriCursorX, cursorY);
            ctxpre.stroke();
        }
        else {
            ctxpre.fillStyle = color;
            ctxpre.beginPath();
            ctxpre.moveTo(oriCursorX, cursorY);
            ctxpre.lineTo(oriCursorX + ((cursorX - oriCursorX) / 2), oriCursorY);
            ctxpre.lineTo(cursorX, cursorY);
            ctxpre.lineTo(oriCursorX, cursorY);
            ctxpre.fill();
        }
        [cursorX, cursorY] = [event.offsetX, event.offsetY];
    }
    else if (mode == 'circle') {
        ctxpre.clearRect(0, 0, canvasPre.offsetWidth, canvasPre.offsetHeight);
        ctxpre.globalCompositeOperation = "source-over";
        ctx.globalCompositeOperation = "source-over";
        ctxpre.lineJoin = 'round';
        ctxpre.lineCap = 'round';

        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        if (fillType == 0) {
            ctxpre.lineWidth = thickness;
            ctxpre.strokeStyle = color;
            ctxpre.beginPath();
            ctxpre.arc((oriCursorX + cursorX) / 2, (oriCursorY + cursorY) / 2, Math.sqrt(((oriCursorX - cursorX) * 0.5) ** 2 + ((oriCursorY - cursorY) * 0.5) ** 2), 0, 2 * Math.PI, false);
            ctxpre.stroke();
        }
        else {
            ctxpre.fillStyle = color;
            ctxpre.beginPath();
            ctxpre.arc((oriCursorX + cursorX) / 2, (oriCursorY + cursorY) / 2, Math.sqrt(((oriCursorX - cursorX) * 0.5) ** 2 + ((oriCursorY - cursorY) * 0.5) ** 2), 0, 2 * Math.PI, false);
            ctxpre.fill();
        }
        [cursorX, cursorY] = [event.offsetX, event.offsetY];
    }
    else if (mode == 'line') {
        ctxpre.clearRect(0, 0, canvasPre.offsetWidth, canvasPre.offsetHeight);
        ctxpre.globalCompositeOperation = "source-over";
        ctx.globalCompositeOperation = "source-over";
        ctxpre.lineJoin = 'round';
        ctxpre.lineCap = 'round';

        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctxpre.lineWidth = thickness;
        ctxpre.strokeStyle = color;
        ctxpre.beginPath();
        ctxpre.moveTo(oriCursorX, oriCursorY);
        ctxpre.lineTo(cursorX, cursorY);
        ctxpre.stroke();
        [cursorX, cursorY] = [event.offsetX, event.offsetY];
    }
    else if (mode == 'colorize') {
        var imageData = ctxpse.getImageData(cursorX, cursorY, 1, 1).data;
        updateColorInfo(imageData[0], imageData[1], imageData[2]);
    }
}

function changeThickness(e) {
    thickness = e;
    document.documentElement.style.setProperty('--thickness-width', thicknesSlider.offsetWidth * thickness * 0.01 + 'px');
}

function changeScale(e) {
    if (e > 250) scale = 250;
    else if (e < 10) scale = 10;
    else scale = e;
    scaleValue.innerHTML = scale + '%';
    scaleSlider.value = scale;
    document.documentElement.style.setProperty('--scale-width', scaleSlider.offsetWidth * scale * 0.004 + 'px');
    canvasContainer.setAttribute('style', 'transform: scale(' + scale / 100 + ');');
}

function fillTypeChange() {
    fillType = document.querySelector('[name=fill-type]:checked').value;
}

function toolChange() {
    mode = document.querySelector('[name=tool]:checked').value;
    canvasContainer.className = mode;

    if (mode != 'text') {
        try {
            document.getElementById('tmp-text-input').remove();
            isEditingText = 0;
        }
        catch (e) {
            console.log('noice');
        }
    }

    // font-area
    var fontArea = document.getElementById('font-area');
    if (mode != 'text') {
        fontArea.classList.add('hidden');
    }
    else fontArea.classList.remove('hidden');

    // fill-type-area
    var fillTypeArea = document.getElementById('fill-type-area');
    if (mode != 'circle' && mode != 'rect' && mode != 'triangle' && mode != 'smile') {
        fillTypeArea.classList.add('hidden');
    }
    else fillTypeArea.classList.remove('hidden');

    // thickness-area
    var thicknessArea = document.getElementById('thickness-area');
    if (mode == 'text' || mode == 'fill' || mode == 'colorize') {
        thicknessArea.classList.add('hidden');
    }
    else thicknessArea.classList.remove('hidden');

    // color-selection-area
    var colorSelectionArea = document.getElementById('color-selection-area');
    if (mode == 'erase' || mode == 'rainbow') {
        colorSelectionArea.classList.add('hidden');
    }
    else colorSelectionArea.classList.remove('hidden');

    // colorize area
    var colorizeArea = document.getElementById('colorize-area');
    if (mode == 'colorize') {
        colorizeArea.classList.remove('hidden');
    }
    else colorizeArea.classList.add('hidden');
}

function newCanvas() {
    canvas.width = newWidth;
    canvas.height = newHeight;

    canvasPre.width = newWidth;
    canvasPre.height = newHeight;

    canvasBg.width = newWidth;
    canvasBg.height = newHeight;

    canvasPseudo.width = newWidth;
    canvasPseudo.height = newHeight;

    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    ctxbg.clearRect(0, 0, canvasBg.offsetWidth, canvasBg.offsetHeight);
    ctxpse.clearRect(0, 0, canvasPseudo.offsetWidth, canvasPseudo.offsetHeight);

    ctxbg.fillStyle = newBgColor;
    ctxbg.fillRect(0, 0, canvasBg.width, canvasBg.height);

    ctxpse.drawImage(canvasBg, 0, 0);

    document.documentElement.style.setProperty('--image-width', newWidth + 'px');
    document.documentElement.style.setProperty('--image-height', newHeight + 'px');

    try {
        var tmpTextInput = document.getElementById('tmp-text-input');
        tmpTextInput.remove();
    }
    catch (e) {
        console.log('^-^');
    }

    isEditingText = 0;

    canvasHistory = [];
    currIndex = 0;
    maxIndex = 0;
    canvasHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    if (currIndex == maxIndex) {
        document.getElementById('redo-btn').disabled = true;
    }
    else document.getElementById('redo-btn').disabled = false;

    if (currIndex == 0) {
        document.getElementById('undo-btn').disabled = true;
    }
    else document.getElementById('undo-btn').disabled = false;
}

function resetCanvas() {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    ctxbg.clearRect(0, 0, canvasBg.offsetWidth, canvasBg.offsetHeight);
    ctxpse.clearRect(0, 0, canvasPseudo.offsetWidth, canvasPseudo.offsetHeight);

    if (isEditingPhoto) {
        newWidth = 1000;
        newWidthContainer.value = 1000;

        newHeight = 700;
        newHeightContainer = 700;

        newBgColor = '#FFFFFF';
        newBgColorContainer.value = '#FFFFFF';

        newCanvas();

        isEditingPhoto = 0;
    }

    ctxbg.fillStyle = newBgColor;
    ctxbg.fillRect(0, 0, canvasBg.width, canvasBg.height);

    try {
        var tmpTextInput = document.getElementById('tmp-text-input');
        tmpTextInput.remove();
    }
    catch (e) {
        console.log('^-^');
    }

    isEditingText = 0;

    changeScale(100);

    canvasHistory = [];
    currIndex = 0;
    maxIndex = 0;
    canvasHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    if (currIndex == maxIndex) {
        document.getElementById('redo-btn').disabled = true;
    }
    else document.getElementById('redo-btn').disabled = false;

    if (currIndex == 0) {
        document.getElementById('undo-btn').disabled = true;
    }
    else document.getElementById('undo-btn').disabled = false;
}

function changeHue(e) {
    var cX = e.offsetX;
    var cY = e.offsetY;
    var cYF = parseFloat(e.offsetY) - 2.5;

    if (cursorStat2) {
        // console.log('hue changing');
        var imageData = ctx2.getImageData(cX, cY, 1, 1).data;
        hue = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
        document.getElementById('color-hue-indicator').setAttribute('style', 'top: ' + cYF + 'px; left: 0px;');
        fillColorBlock();
    }
}

function fillColorBlock() {
    ctx1.fillStyle = hue;
    ctx1.fillRect(0, 0, colorBlockWidth, colorBlockHeight);

    var whiteTrans = ctx1.createLinearGradient(0, 0, colorBlockWidth, 0);
    whiteTrans.addColorStop(0, '#FFFFFFFF');
    whiteTrans.addColorStop(1, '#FFFFFF00');
    ctx1.fillStyle = whiteTrans;
    ctx1.fillRect(0, 0, colorBlockWidth, colorBlockHeight);

    var blackTrans = ctx1.createLinearGradient(0, 0, 0, colorBlockHeight);
    blackTrans.addColorStop(0, '#00000000');
    blackTrans.addColorStop(1, '#000000FF');
    ctx1.fillStyle = blackTrans;
    ctx1.fillRect(0, 0, colorBlockWidth, colorBlockHeight);
}

function chooseColorFromBlock(e) {
    var cursorX = e.offsetX;
    var cursorY = e.offsetY;
    var cXF = parseFloat(e.offsetX) - 2.5;
    var cYF = parseFloat(e.offsetY) - 2.5;

    if (cursorStat3) {
        var imageData = ctx1.getImageData(cursorX, cursorY, 1, 1).data;
        var tmpColor = 'rgb(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ')';
        colorLabel.style.backgroundColor = tmpColor;
        document.getElementById('color-block-indicator').setAttribute('style', 'top: ' + cYF + 'px; left: ' + cXF + 'px;');
        chooseColor(tmpColor);
        document.getElementById('color-label').classList.add('color-selection-active');
    }
}

function chooseColor(c) {
    color = c;
    ctxpre.strokeStyle = color;
    document.getElementById('color-label').classList.remove('color-selection-active');
    var colorChoices = document.getElementById('color-choices').children;
    for (var i = 0; i < colorChoices.length; i++) {
        if (color == colorChoices[i].style.backgroundColor) {
            colorChoices[i].className = 'color-selection color-selection-active';
        }
        else colorChoices[i].className = 'color-selection';
    }

    try {
        document.getElementById('tmp-text-input').style.color = color;
    }
    catch (e) {
        console.log('Hello ^_^');
    }
}

function elementToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + elementToHex(r).toUpperCase() + elementToHex(g).toUpperCase() + elementToHex(b).toUpperCase();
}

function updateColorInfo(r, g, b) {
    document.getElementById('color-info').classList.remove('hidden');
    document.getElementById('color-info-unknown').classList.add('hidden');
    var hex = rgbToHex(r, g, b);
    var rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';

    document.getElementById('color-info').innerHTML = `<div id="color-info" class="flex items-center gap-3">
    <span class="color-selection ms-2" style="background: ` + rgb + `;"></span>
    <div>
        <p id="color-hex" class="text-slate-500 text-sm">` + hex + `</p>
        <p id="color-rgb" class="text-slate-500 text-sm">` + rgb + `</p>
    </div>
</div>
<button class="btn btn-link" onclick="addColorManual('`+ rgb + `');">
    <span class="material-symbols-rounded">add_circle</span>
    Add Color
</button>`;
}

function addColor() {
    var newColor = colorLabel.style.backgroundColor;
    var htmlCode = '<button class="color-selection" style="background: ' + newColor + '"onclick="chooseColor(\'' + newColor + '\')"></button>';
    var colorChoices = document.getElementById('color-choices').children;
    for (var i = 0; i < colorChoices.length; i++) {
        if (newColor == colorChoices[i].style.backgroundColor) {
            return;
        }
    }
    document.getElementById('color-choices').innerHTML += (htmlCode);
}

function addColorManual(hex) {
    var newColor = hex;
    var htmlCode = '<button class="color-selection" style="background: ' + newColor + '"onclick="chooseColor(\'' + newColor + '\')"></button>';
    var colorChoices = document.getElementById('color-choices').children;
    for (var i = 0; i < colorChoices.length; i++) {
        console.log(colorChoices[i].style.backgroundColor);
        if (newColor == colorChoices[i].style.backgroundColor) {
            return;
        }
    }
    document.getElementById('color-choices').innerHTML += (htmlCode);
}

function download() {
    // var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // ctxbg.drawImage(canvas, 0, 0);
    var canvasUrl = canvasPseudo.toDataURL("image/png");
    const createEl = document.createElement('a');
    createEl.href = canvasUrl;
    createEl.download = "canvas";
    createEl.click();
    createEl.remove();
}

function saveCanvas() {
    // var imageData = ctxpre.getImageData(0, 0, 1, 1).data;
    // alert('rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ', ' + imageData[3] + ')');
    var imageData = ctxpre.getImageData(0, 0, canvasPre.width, canvasPre.height);
    ctx.drawImage(canvasPre, 0, 0);
    ctxpre.clearRect(0, 0, canvasPre.offsetWidth, canvasPre.offsetHeight);

    ctxpse.drawImage(canvasBg, 0, 0);
    ctxpse.drawImage(canvas, 0, 0);
}

function handleImage(e) {
    newCanvas();
    var reader = new FileReader();
    reader.onload = function (event) {
        var img = new Image();
        img.onload = function () {
            canvasBg.width = img.width;
            canvasBg.height = img.height;
            ctxbg.drawImage(img, 0, 0);

            canvas.width = img.width;
            canvas.height = img.height;

            canvasPre.width = img.width;
            canvasPre.height = img.height;

            canvasPseudo.width = img.width;
            canvasPseudo.height = img.height;

            document.documentElement.style.setProperty('--image-width', img.width + 'px');
            document.documentElement.style.setProperty('--image-height', img.height + 'px');

            canvasHistory[0] = ctx.getImageData(0, 0, canvas.width, canvas.height);

            ctxpse.drawImage(img, 0, 0);
            changeScale(100);
            isEditingPhoto = 1;
        }
        img.src = event.target.result;
        closeModal('new-dialog');
    }
    reader.readAsDataURL(e.target.files[0]);
}

function saveHistory() {
    for (var i = maxIndex; i > currIndex; i--) {
        canvasHistory.pop();
    }
    canvasHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    currIndex++;
    maxIndex = currIndex;

    // alert(currIndex);

    if (currIndex == maxIndex) {
        document.getElementById('redo-btn').disabled = true;
    }
    else document.getElementById('redo-btn').disabled = false;

    if (currIndex == 0) {
        document.getElementById('undo-btn').disabled = true;
    }
    else document.getElementById('undo-btn').disabled = false;
}

function canvasUndo() {
    if (currIndex == 0) return;
    currIndex--;
    var destImg = canvasHistory[currIndex];
    canvas.width = destImg.width;
    canvas.height = destImg.height;
    canvasPre.width = destImg.width;
    canvasPre.height = destImg.height;
    document.documentElement.style.setProperty('--image-width', destImg.width + 'px');
    document.documentElement.style.setProperty('--image-height', destImg.height + 'px');
    // alert(destImg);
    ctx.putImageData(destImg, 0, 0);

    // alert(currIndex);

    if (currIndex == maxIndex) {
        document.getElementById('redo-btn').disabled = true;
    }
    else document.getElementById('redo-btn').disabled = false;

    if (currIndex == 0) {
        document.getElementById('undo-btn').disabled = true;
    }
    else document.getElementById('undo-btn').disabled = false;
}

function canvasRedo() {
    if (currIndex == maxIndex) return;
    currIndex++;
    var destImg = canvasHistory[currIndex];
    canvas.width = destImg.width;
    canvas.height = destImg.height;
    canvasPre.width = destImg.width;
    canvasPre.height = destImg.height;
    document.documentElement.style.setProperty('--image-width', destImg.width + 'px');
    document.documentElement.style.setProperty('--image-height', destImg.height + 'px');

    // alert(destImg);
    ctx.putImageData(destImg, 0, 0);

    if (currIndex == maxIndex) {
        document.getElementById('redo-btn').disabled = true;
    }
    else document.getElementById('redo-btn').disabled = false;

    if (currIndex == 0) {
        document.getElementById('undo-btn').disabled = true;
    }
    else document.getElementById('undo-btn').disabled = false;
}

var tmpTextInput;

function writeText(e) {
    if (isEditingText) {
        var newTextInput = document.createElement('input');
        newTextInput.setAttribute('id', 'tmp-text-input');
        newTextInput.setAttribute('style', 'top: ' + oriCursorY + 'px; left: ' + oriCursorX + 'px; font-size: ' + fontSize + 'px; font-family: ' + fontStyle + ', sans-serif; color:' + color + ';');
        canvasContainer.appendChild(newTextInput);
        tmpTextInput = document.getElementById('tmp-text-input');
        tmpTextInput.autofocus = true;
        textX = oriCursorX;
        textY = oriCursorY;

        tmpTextInput.addEventListener('input', resizeInput);
        resizeInput.call(tmpTextInput);
    }
    else {
        var tmpTextInput = document.getElementById('tmp-text-input');
        ctx.font = fontSize + 'px ' + fontStyle;
        ctx.fillStyle = color;
        var tmpY = parseFloat(textY) + parseFloat(fontSize);
        console.log(textX + 'and' + tmpY);
        ctx.fillText(tmpTextInput.value, textX, tmpY);

        if (tmpTextInput.value != '') saveHistory();

        try {
            tmpTextInput.remove();
        }
        catch (e) {
            console.log('No tmp-text-input on screen. This shouldnt happen.');
        }
    }
}

function changeFont() {
    try {
        document.getElementById('tmp-text-input').style.fontFamily = fontStyle;
        document.getElementById('tmp-text-input').style.fontSize = fontSize + 'px';
        document.getElementById('tmp-text-input').style.color = color;
    }
    catch (e) {
        console.log('No tmp-text-input on screen');
    }
}

function resizeInput() {
    this.style.width = this.value.length + 'ch';
}

function openModal(id) {
    let modal = document.getElementById(id);
    modal.classList.remove('hidden');
    // modal.addEventListener('onmousedown', closeModal(id));

    if (newWidth > 10000 || newWidth < 10) {
        newWidthContainer.value = 1000;
        newWidth = 1000;
    }
    if (newHeight > 10000 || newHeight < 10) {
        newHeightContainer.value = 700;
        newHeight = 700;
    }

    newWidthContainer.classList.remove('form-input-error');
    newHeightContainer.classList.remove('form-input-error');
    errMsg.innerHTML = '';
    document.getElementById('new-blank-btn').disabled = false;
}

function closeModal(id) {
    let modal = document.getElementById(id);
    modal.classList.add('hidden');
}

function switchTab(id, show, tabid) {

    var allItems = document.getElementById(id).children;
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].id == show) allItems[i].classList.remove('hidden');
        else allItems[i].classList.add('hidden');
    }

    document.getElementById(tabid).checked = true;
}

function resetDimension() {
    newWidthContainer.value = 1000;
    newWidth = 1000;
    newHeightContainer.value = 700;
    newHeight = 700;
    newBgColorContainer.value = '#FFFFFF';
    newBgColor = "#FFFFFF";

    newWidthContainer.classList.remove('form-input-error');
    newHeightContainer.classList.remove('form-input-error');
    errMsg.innerHTML = '';
    document.getElementById('new-blank-btn').disabled = false;
}
