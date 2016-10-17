import basicGenerators from './basic.generators'
import suspendedExecution from './suspended.execution'
import iteratingByHand from './iterating.by.hand'
import otherGeneratorMethods from './other.generator.methods'
import { theOldSchoolWay } from './async.await/the.old.school.way'
import { theNewSchoolWay } from './async.await/async.await'

console.log('\n==========HERE WE GO==========\n')

basicGenerators()
suspendedExecution()
iteratingByHand()
otherGeneratorMethods()
theOldSchoolWay()
theNewSchoolWay()

console.log('\n==============================\n')
console.log('Everything that happens after here is \'async\'')
