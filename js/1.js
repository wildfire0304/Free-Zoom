'use strict';

var target = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]];

// 初始化的为一个三行四列的矩阵
var aim = {
	x: 3,
	y: 4,
	text: 'a'
};

function isEmpty(obj) {

	var emptyRect = 0;
	for (var i = 0; i < target.length - aim.x; i++) {
		for (var j = 0; j < target[i].length - aim.y; j++) {
			// 这里根据矩阵左上角进行查阵
			emptyRect = 0;
			for (var k = 0; k < aim.x; k++) {
				for (var l = 0; l < aim.y; l++) {
					if (target[i + k][j + l] === 0) {
						emptyRect = 1;
					}
				};
			};
			if (emptyRect === 1) {
				for (var _k = 0; _k < aim.x; _k++) {
					for (var _l = 0; _l < aim.y; _l++) {
						target[i + _k][j + _l] = 1;
					};
				}
			}
			return;
		};
		return;
	};
	return res;
};

// 


void 0;