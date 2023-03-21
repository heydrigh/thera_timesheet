const aliases = (prefix = `src`) => ({
	'@components': `${prefix}/components`,
	'@config': `${prefix}/config`,
	'@enums': `${prefix}/enums`,
	'@hooks': `${prefix}/hooks`,
	'@styles': `${prefix}/styles`,
	'@utils': `${prefix}/utils`,
	'@pages': `${prefix}/pages`,
	'@routes': `${prefix}/routes`,
	'@assets': `${prefix}/assets`,
	'@services': `${prefix}/services`,
	'@hoc': `${prefix}/hoc`,
	'@schemas': `${prefix}/schemas`,
	'@types': `${prefix}/types`,
	'@context': `${prefix}/context`,
})

module.exports = aliases
