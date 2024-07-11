blocks.onBlockPlaced(GRASS, function () {
    blocks.fill(
    WOOL,
    pos(1, -1, 1),
    pos(20, -4, 20),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(2, -1, 2),
    pos(19, -3, 19),
    FillOperation.Replace
    )
})
