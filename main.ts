let number = 0
player.onChat("run", function (size) {
    number = size * 2 - 1
    agent.move(UP, 1)
    for (let index = 0; index < size; index++) {
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < number; index++) {
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(RIGHT)
        }
        number += 0 - 2
        agent.turn(LEFT)
        agent.move(BACK, 1)
        agent.turn(RIGHT)
        agent.move(UP, 1)
        agent.move(FORWARD, 1)
    }
})
