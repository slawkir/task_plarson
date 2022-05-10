function changeState(cb) {
	document.addEventListener('readystatechange', () => {
		if (document.readyState === 'interactive') {
			cb();
			document.addEventListener('DOMContentLoaded', () => {
				cb()
			});
		}
	})
}

const attentionFunction = () => {
	alert('Внимание!');
}

changeState(attentionFunction)

document.addEventListener('DOMContentLoaded', () => {
	alert('Dom загрузился!!!');
})