'use strict';
module.exports = {
  list: [
    'es.symbol',
    'es.object.define-property',
    'es.object.define-properties',
    'es.object.get-own-property-descriptor',
    'es.object.get-own-property-descriptors',
    'es.object.create',
    'es.object.get-prototype-of',
    'es.object.keys',
    'es.object.values',
    'es.object.entries',
    'es.object.get-own-property-names',
    'es.object.freeze',
    'es.object.seal',
    'es.object.prevent-extensions',
    'es.object.is-frozen',
    'es.object.is-sealed',
    'es.object.is-extensible',
    'es.object.assign',
    'es.object.is',
    'es.object.set-prototype-of',
    'es.object.to-string',
    'es.object.define-getter',
    'es.object.define-setter',
    'es.object.lookup-getter',
    'es.object.lookup-setter',
    'es.function.bind',
    'es.function.name',
    'es.function.has-instance',
    'es.number.constructor',
    'es.number.to-fixed',
    'es.number.to-precision',
    'es.number.epsilon',
    'es.number.is-finite',
    'es.number.is-integer',
    'es.number.is-nan',
    'es.number.is-safe-integer',
    'es.number.max-safe-integer',
    'es.number.min-safe-integer',
    'es.number.parse-float',
    'es.number.parse-int',
    'es.parse-int',
    'es.parse-float',
    'es.math.acosh',
    'es.math.asinh',
    'es.math.atanh',
    'es.math.cbrt',
    'es.math.clz32',
    'es.math.cosh',
    'es.math.expm1',
    'es.math.fround',
    'es.math.hypot',
    'es.math.imul',
    'es.math.log10',
    'es.math.log1p',
    'es.math.log2',
    'es.math.sign',
    'es.math.sinh',
    'es.math.tanh',
    'es.math.trunc',
    'es.string.from-code-point',
    'es.string.raw',
    'es.string.trim',
    'es.string.code-point-at',
    'es.string.ends-with',
    'es.string.includes',
    'es.string.repeat',
    'es.string.starts-with',
    'es.string.pad-start',
    'es.string.pad-end',
    'es.string.iterator',
    'es.string.anchor',
    'es.string.big',
    'es.string.blink',
    'es.string.bold',
    'es.string.fixed',
    'es.string.fontcolor',
    'es.string.fontsize',
    'es.string.italics',
    'es.string.link',
    'es.string.small',
    'es.string.strike',
    'es.string.sub',
    'es.string.sup',
    'es.array.includes',
    'es.array.is-array',
    'es.array.from',
    'es.array.of',
    'es.array.join',
    'es.array.slice',
    'es.array.sort',
    'es.array.for-each',
    'es.array.map',
    'es.array.filter',
    'es.array.some',
    'es.array.every',
    'es.array.reduce',
    'es.array.reduce-right',
    'es.array.index-of',
    'es.array.last-index-of',
    'es.array.copy-within',
    'es.array.fill',
    'es.array.find',
    'es.array.find-index',
    'es.array.iterator',
    'es.array.species',
    'es.regexp.constructor',
    'es.regexp.to-string',
    'es.regexp.flags',
    'es.regexp.match',
    'es.regexp.replace',
    'es.regexp.search',
    'es.regexp.split',
    'es.promise',
    'es.map',
    'es.set',
    'es.weak-map',
    'es.weak-set',
    'es.reflect.apply',
    'es.reflect.construct',
    'es.reflect.define-property',
    'es.reflect.delete-property',
    'es.reflect.get',
    'es.reflect.get-own-property-descriptor',
    'es.reflect.get-prototype-of',
    'es.reflect.has',
    'es.reflect.is-extensible',
    'es.reflect.own-keys',
    'es.reflect.prevent-extensions',
    'es.reflect.set',
    'es.reflect.set-prototype-of',
    'es.date.now',
    'es.date.to-json',
    'es.date.to-iso-string',
    'es.date.to-string',
    'es.date.to-primitive',
    'es.typed.array-buffer',
    'es.typed.data-view',
    'es.typed.int8-array',
    'es.typed.uint8-array',
    'es.typed.uint8-clamped-array',
    'es.typed.int16-array',
    'es.typed.uint16-array',
    'es.typed.int32-array',
    'es.typed.uint32-array',
    'es.typed.float32-array',
    'es.typed.float64-array',
    'esnext.array.flat-map',
    'esnext.array.flatten',
    'esnext.string.at',
    'esnext.string.trim-left',
    'esnext.string.trim-right',
    'esnext.string.match-all',
    'esnext.symbol.async-iterator',
    'esnext.symbol.description',
    'esnext.symbol.observable',
    'esnext.map.of',
    'esnext.set.of',
    'esnext.weak-map.of',
    'esnext.weak-set.of',
    'esnext.map.from',
    'esnext.set.from',
    'esnext.weak-map.from',
    'esnext.weak-set.from',
    'esnext.global',
    'esnext.math.clamp',
    'esnext.math.deg-per-rad',
    'esnext.math.degrees',
    'esnext.math.fscale',
    'esnext.math.iaddh',
    'esnext.math.isubh',
    'esnext.math.imulh',
    'esnext.math.rad-per-deg',
    'esnext.math.radians',
    'esnext.math.scale',
    'esnext.math.umulh',
    'esnext.math.signbit',
    'esnext.promise.finally',
    'esnext.promise.try',
    'esnext.reflect.define-metadata',
    'esnext.reflect.delete-metadata',
    'esnext.reflect.get-metadata',
    'esnext.reflect.get-metadata-keys',
    'esnext.reflect.get-own-metadata',
    'esnext.reflect.get-own-metadata-keys',
    'esnext.reflect.has-metadata',
    'esnext.reflect.has-own-metadata',
    'esnext.reflect.metadata',
    'esnext.asap',
    'esnext.observable',
    'web.immediate',
    'web.dom.for-each',
    'web.dom.iterable',
    'web.timers',
    'core.get-iterator-method',
    'core.get-iterator',
    'core.is-iterable',
  ],
  libraryBlacklist: [
    'es.object.to-string',
    'es.function.name',
    'es.regexp.constructor',
    'es.regexp.to-string',
    'es.regexp.flags',
    'es.regexp.match',
    'es.regexp.replace',
    'es.regexp.search',
    'es.regexp.split',
    'es.number.constructor',
    'es.date.to-string',
    'es.date.to-primitive',
    'esnext.symbol.description',
    'web.dom.for-each',
  ],
  /* eslint-disable prefer-template */
  banner: '/**\n' +
          ' * core-js ' + require('../package').version + '\n' +
          ' * https://github.com/zloirock/core-js\n' +
          ' * License: http://rock.mit-license.org\n' +
          ' * © ' + new Date().getFullYear() + ' Denis Pushkarev\n' +
          ' */',
  /* eslint-enable prefer-template */
};
