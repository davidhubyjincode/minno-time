import _ from 'lodash';
import adjustCanvas from './adjust_canvas';
import applyCanvasStyles from './applyCanvasStyles';
import stream from 'mithril-stream';
import css from 'minno-css';

export default setupCanvas;

function setupCanvas(canvas, script){
    var canvasSettings = _.get(script, 'settings.canvas', {});
    var $resize = stream();

    canvas.classList.add('minno-canvas');

    $resize.map(adjustCanvas(canvas, canvasSettings));
    $resize({});

    window.addEventListener('orientationchange', $resize);
    window.addEventListener('resize', $resize);



    var map = {
        background 			: {element: document.body, property: 'backgroundColor'},
        canvasBackground	: {element: canvas, property:'backgroundColor'},
        borderColor			: {element: canvas, property:'borderColor'},
        borderWidth			: {element: canvas, property:'borderWidth'}
    };

    // settings activator
    var off = applyCanvasStyles(map, _.pick(canvasSettings,['background','canvasBackground','borderColor','borderWidth']));

    canvasSettings.css && css(canvas, canvasSettings.css);

    $resize.end
        .map(function(){canvas.classList.remove('minno-canvas');})
        .map(removeListeners)
        .map(off);

    return $resize;

    function removeListeners(){
        window.removeEventListener('orientationchange',$resize);
        window.removeEventListener('resize', $resize);
    }
}
