const paletteData = "IRgbcmdrR0FrbIxQ49JF+KRet0hGTigumkB+qspT+fXvmZ7XkWxSIzkq3b6L";

loadPalette();

const guyData = "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";

const guyTags = {
  run: [0, 4] as AnimRange,
  idle: [5, 8] as AnimRange,
  jump: [9, 10] as AnimRange,
  fall: [11, 12] as AnimRange,
  garde: [13, 15] as AnimRange,
  advance: [16, 18] as AnimRange,
  lunge: [19, 21] as AnimRange,
  draw: [22, 22] as AnimRange,
  victory: [23, 26] as AnimRange,
  fake: [27, 28] as AnimRange,
  parry: [29, 30] as AnimRange,
}

const guyAnim = makeAnim(guyData);

const fontData = "AAABBgoBBS8AAAQDCgEFqgUAAAUGCgEFSH31FQAAAwYKAQVqlgMAAAQGCgEFeyTeAAAEBgoBBVKltQAAAgIKAQUGAAADBgoBBVQiAgAAAwYKAQURqQAAAQUFCgEF1X1XAQACAwMKAQW6AAAEAgIKAQUGAAMDAQoBBQcABQEBCgEFAQAAAwYKAQWklAAAAAMGCgEFalsBAAADBgoBBZOkAwAAAwYKAQWjkwMAAAMGCgEFo8gBAAADBgoBBa1JAgAAAwYKAQXPyAEAAAMGCgEFzloBAAADBgoBBSdJAgAAAwYKAQWqWgEAAAMGCgEFqskBAAEBBAoBBQkAAQEFCgEFGQAABQYKAQVE/C8IAAEDAwoBBccBAAAFBgoBBQT9jwgAAAMGCgEFLwUBAAAEBgoBBZ/d8QAABAYKAQWX+ZkAAAQGCgEFl3n5AAAEBgoBBR4R4QAABAYKAQWXmXkAAAQGCgEFHxfxAAAEBgoBBR8XEQAABAYKAQUenXkAAAQGCgEFmZ+ZAAADBgoBBZekAwAAAwYKAQUm2QMAAAQGCgEFmTWVAAAEBgoBBRER8QAABQYKAQVx11orAAAFBgoBBXHWmiMAAAUGCgEFLsYYHQAABAYKAQWXeREAAAUGCgEFLsaYLAAABAYKAQWXeZkAAAQGCgEFHmH4AAAFBgoBBZ8QQggAAAQGCgEFmZlpAAAFBgoBBTEqRQgAAAUGCgEFMcZaHQAABQYKAQVREaIiAAAFBgoBBTFGRwgAAAQGCgEFzyTzAAADBgoBBU+SAwAAAwYKAQWJRAIAAAMGCgEFJ8kDAAAGBgoBBYzXMgwD";

const fontAnim = makeAnim(fontData);

const forestTilesData = "AAAICAoBCf/M//+dDQQEAAAIBwoBCf9s///95iYAAAgICgEJ/7T/7/l5ODACAAQIAAEM73///gAACAgAAQ7//3z/P348PAACCAYKAQ0gtf////8AAggGCgEGBAQMnv//AAAICAoBBggMDAyIwh7/AQAHCAoBBgQGBgoSGB4AAAgICgEGEDCgAAQMHH8AAAcICgEGKACAQHD4/gAACAcKAQE8fvDuXz9+AAAICAoBAXbvD2D+//9+AAAICAoBATh8fv79++deAAYIAgoBAWb3AAAICAoBASk56SkvKSkpAAAICAoBAUDgQEROROT/";

const forestTilesTags = {
  ground: [0, 2] as AnimRange,
  stump: [3, 3] as AnimRange,
  stumpCap: [4, 4] as AnimRange,
  grass: [5, 5] as AnimRange,
  fire: [6, 10] as AnimRange,
  stone: [11, 12] as AnimRange,
  stoneCap: [13, 13] as AnimRange,
  stoneTrim: [14, 14] as AnimRange,
  gate: [15, 15] as AnimRange,
  gateCap: [16, 16] as AnimRange,
}

const forestTilesAnim = makeAnim(forestTilesData);

const dummyData = "CggKERkBBThQwQcXOEAIIW58TAADBCCAAAQYQAAJBw0SGQEF4AAqwAe4AA6AIDjDH0cACAADIAAEAAEwAASAABAACwgOERkBBeAAVAAVwAcwAUwADtzn+AcQAAwAAUAACAADgAAgAAkFDhRkAQUAB6ACqAA+gAvgA3AA4PcPfgAEgAEgAAQAAUAAIAAYAAgAAggICREPAQXgQMOHDHkyO3hAwEBGBAggYIAAAQcODQsPAQUAyDd9w0r4sTJCRnAQAANAAAgGEhAHDwEFDgC/gdVCn0QZNhkEDgQEERMIDwEFDgCoAEAFAD4YkQGJr4w4RhggAgISFgcPAQUOAMAHAPABAnwAARViwEeQ6SyEAQ==";

const dummyTags = {
  idle: [0, 2] as AnimRange,
  hit: [3, 3] as AnimRange,
  death: [4, 8] as AnimRange,
}

const dummyAnim = makeAnim(dummyData);

const targetData = "CQgNEAoBCOABQiATkkStlKlKVamVulKXabUuyck8woffCQkODwoBCEAA6ABBICcIEmVFnQr9WnW1rtlr8mQewge/AQ==";

const targetTags = {
  idle: [0, 0] as AnimRange,
  hit: [1, 1] as AnimRange,
}

const targetAnim = makeAnim(targetData);

const coinData = "DRAGCAoBBIwUtmkoMQ4QBAgKAQTW/b9rDxACCAoBBP//";

const coinTags = {
  idle: [0, 2] as AnimRange,
}

const coinAnim = makeAnim(coinData);

const portraitData = "AAAWGQoBBADgAIA/APgegJ8H4MEBEGAAdAuAkQBgAAEYwAD2N4D9D8DDA/B/APgPcP4b4jxZMEAIEAgg+CEAAAAAAAB3dQDVFTBXBQAAFhkKAQQA4ACAPwD4HoCfB+DBARBgAHQLgJEAYAABGMAA9jeADQ/AwwPweQD4D3D+G+I8WTBACBAIIPghAAAAAAAAd3UA1RUwVwU=";

const portraitTags = {
  John: [0, 1] as AnimRange,
}

const portraitAnim = makeAnim(portraitData);

const merryData = "DQcJEQoBCT74sMCDBwYefrZp4sODAwUJEmMADQYJEgoBCTz8sMCDBwYMPPxs08SHBwcKEiXEAA0GCRIKAQk++LDAgwcGHn62aeLDAwMHChIkxgANBQkTCgEJAnjwYYEHDww8/GzTxIcHBg4UJEiMAQgHEREOAQl8APABYAGABwAPAAwgPCB8IPQgxiaAMYAEABEAIgCEAAgBGAYACQcREQ4BCQQA8ADgA8ACAA8AHiAYIHwg9CDGJoAxgAQAEQAhAEIAhAAMAwAKBxERDgEJeAD4AWABgAcADwAMIDwgfCD0IMYmgDGABIAIABEAIQBCAIYBAAoHERESAQkEAPAA4APAAgAPAB4gGCB8IPQgxiaAMQADwAeABAAEAAgAMAAACQYREhIBCXgA+AFgAYAHAA8ADCA8IHwg9CDGJoAxAA8AHgAUABgACAAIADAAAAgHEhESAQn4AMAHAAsAeADgAQADCB4QfiDnQQCbAIwBMABAAQAJAEMAAgEYDAALCBEQDwEJfADwAWABh+cBPwAOAB4AHgAyAGIAxACAA4AJwBBAIIDBAAkEDRQoAQkAEAABIADCQ/wEjcALuAAO8AEZEAPCABiAB4jBIASIAQMFBA4UKAEJgABAABCAC3AFdIGGBCGBifDBPwAPgAHAADAAFAAJMAQCgcECBhESEgEJABAAIACAAA4BLwJ0BDAQQCAAIwA//B8APADwAMACAAmAIYBAAAMDCAUQExIBCQCAAIAAQMBB8ENgQcAjgCOAEfAPzAPDA4ABgAOABUAEMAIIAhgG";

const merryTags = {
  idle: [0, 3] as AnimRange,
  garde: [4, 6] as AnimRange,
  advance: [7, 9] as AnimRange,
  flinch: [10, 11] as AnimRange,
  hit: [12, 14] as AnimRange,
}

const merryAnim = makeAnim(merryData);