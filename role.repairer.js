const roleBuilder = require('./role.builder')
const creepCore = require('./creepCore')

module.exports = creepCore({
    work: creep => {
        const structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: s =>
                s.hits < s.hitsMax &&
                s.structureType != STRUCTURE_WALL &&
                s.structureType != STRUCTURE_RAMPART
        })

        if (structure != undefined) {
            if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                creep.moveTo(structure)
            }
        } else roleBuilder.run(creep)
    }
})
