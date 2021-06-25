import './RippleEffect.css'


const rippleEffect = ( event) => {

	const getRippleContainer = target => {
		return target.querySelector('.ripple-container') ?? (
			() => {
				const rippleContainer = document.createElement('div')
				rippleContainer.className = 'ripple-container'
				target.prepend(rippleContainer)
				return rippleContainer
			}
		)()
	}

	try {
		setOffsetAttributes(event.target)
		const ripple = document.createElement('span')
		ripple.className = 'ripple hidden'
		const coords = event.target.getBoundingClientRect()
		const x = event.pageX - coords.x
		const y = event.pageY - coords.y
		ripple.style.cssText = `left:${x}px; top:${y}px;`
		// console.log(`x: ${event.pageX} - ${event.target.offsetLeft}`)
		// console.log(`y: ${event.pageY} - ${event.target.offsetTop}`)

		getRippleContainer(event.target).appendChild(ripple)
		setTimeout(() =>ripple && ripple.classList.remove('hidden'))
		setTimeout(() =>ripple && ripple.classList.add('fade'), 500)
		// setTimeout(() =>ripple.remove(), 1000)

	} catch (e) {
		console.error(e)
	}
}

export const setOffsetAttributes = element => {
	const isSet = element.dataset.offsetIsSet
	if (!isSet) {
		const value = Math.max(element.offsetWidth, element.offsetHeight) * 2
		element.setAttribute('data-offset-is-set', true)
		element.style.setProperty('--w', value + 'px')
		element.style.setProperty('--h', value + 'px')
	}
	return
}

export default rippleEffect