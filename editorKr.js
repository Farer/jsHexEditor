window.onload = function() {
	prepareOtherTileInfo();
    prepareTileInfo();
    draw();
}
function prepareOtherTileInfo() {
	prepareRiversInfo();
	prepareBridgesInfo();
	prepareForestsInfo();
	prepareHighForestsInfo();
	prepareHillsInfo();
	prepareGrassesInfo();
	prepareSwampsInfo();
}
var tileSize = 58;
var row = 10;
var column = 16;
var roads = [];
var grasses = [];
var rivers = [];
var bridges = [];
var forests = [];
var highForests = [];
var hills = [];
var mountains = [];
var swamps = [];
var tileInfo = [];


function prepareRiversInfo() {
	for(var i=0; i<row; i++) {
		for(var j=0; j<column; j++) {
			if(
				i!=6 && ( j==3 ) ||
				i!=3 && ( j==12 )
			)  {
				rivers.push(i+','+j);
			}
		}
	}
}
function prepareBridgesInfo() {	
	bridges.push('6,3');
    bridges.push('6,4');
	bridges.push('3,11');
    bridges.push('3,12');
    console.log('--- bridges ---');
    console.log(bridges);
}
function prepareForestsInfo() {
	forests.push('0,2');
	forests.push('1,2');
	forests.push('2,2');
	forests.push('3,2');
	forests.push('4,2');
	forests.push('5,2');
	forests.push('7,2');
	forests.push('8,2');
	forests.push('9,1');
	forests.push('9,2');
	forests.push('9,5');
	forests.push('9,6');
	
	forests.push('3,6');
	
	forests.push('4,5');
	forests.push('5,10');	
	
	forests.push('6,9');
	
	forests.push('0,4');
	forests.push('1,4');
	
	forests.push('0,9');
	forests.push('0,10');
	forests.push('0,13');
	forests.push('0,14');
	forests.push('1,13');
	forests.push('2,13');
	forests.push('4,13');
	forests.push('5,13');
	forests.push('6,13');
	forests.push('7,13');
	forests.push('8,13');
	forests.push('9,13');
	
	forests.push('8,11');
	forests.push('9,11');
    
    console.log('--- forests ---');
    console.log(forests);
}
function prepareHighForestsInfo() {
	highForests.push('0,0');
	highForests.push('0,1');
	highForests.push('1,0');
	highForests.push('1,1');
	highForests.push('2,0');
	highForests.push('2,1');
  
	highForests.push('0,5');
	highForests.push('0,6');
	highForests.push('0,7');
	highForests.push('0,8');
	highForests.push('1,5');
	highForests.push('1,6');	
	
	highForests.push('8,9');
	highForests.push('8,10');
	highForests.push('9,7');
	highForests.push('9,8');
	highForests.push('9,9');
	highForests.push('9,10');
  
  highForests.push('7,14');
	highForests.push('7,15');
	highForests.push('8,14');
	highForests.push('8,15');
	highForests.push('9,14');
	highForests.push('9,15');
    
    console.log('--- highForests ---');
    console.log(highForests);
}
function prepareHillsInfo() {
	hills.push('3,0');
	hills.push('3,1');
  
	hills.push('2,5');
	hills.push('2,6');
	hills.push('2,7');
	hills.push('3,5');
	
	hills.push('1,7');
	
	
	hills.push('6,10');
	hills.push('7,8');
	hills.push('7,9');
	hills.push('7,10');
	hills.push('8,8');
  
  	hills.push('6,14');
	hills.push('6,15');
    
    console.log('--- hills ---');
    console.log(hills);
	
}
function prepareGrassesInfo() {
	
	
	grasses.push('4,1');
	
	grasses.push('6,0');
	grasses.push('6,1');
	grasses.push('7,0');
	grasses.push('8,0');
	
	grasses.push('3,7');
	grasses.push('4,7');
	grasses.push('5,6');
	
	grasses.push('4,9');
	grasses.push('5,8');
	grasses.push('6,8');
	
	grasses.push('4,5');
	grasses.push('4,6');
	grasses.push('5,5');
	
	grasses.push('1,8');
	grasses.push('1,9');
	grasses.push('1,10');
	grasses.push('2,8');
	grasses.push('2,9');
	grasses.push('2,10');
	
	grasses.push('7,5');
	grasses.push('7,6');
	grasses.push('7,7');	
	grasses.push('8,5');
	grasses.push('8,6');
	grasses.push('8,7');
	
	grasses.push('4,10');
	grasses.push('5,9');
	grasses.push('5,10');
	grasses.push('5,14');
	
	
	
	grasses.push('1,15');
	grasses.push('2,15');
	grasses.push('3,14');
	grasses.push('3,15');
    
    console.log('--- grasses ---');
    console.log(grasses);
}
function prepareSwampsInfo() {	
	swamps.push('2,4');
	swamps.push('3,4');
	swamps.push('4,4');
	swamps.push('5,4');
	swamps.push('7,4');
	swamps.push('8,4');
	swamps.push('9,4');
	
	
	swamps.push('0,11');
	swamps.push('1,11');
	swamps.push('2,11');
	swamps.push('4,11');
	swamps.push('5,11');
	swamps.push('6,11');
	swamps.push('7,11');	
    
    console.log('--- swamps ---');
    console.log(swamps);
}
function isRiver(row, column) {
	var key = row+','+column;
	if(rivers.indexOf(key)!=-1) {
		return true;
	}
	return false;
}
function isBridge(row, column) {
	var key = row+','+column;
	if(bridges.indexOf(key)!=-1) {
		return true;
	}
	return false;
}
function isForest(row, column) {
	var key = row+','+column;
	if(forests.indexOf(key)!=-1) {
		return true;
	}
	return false;
}
function isHighForest(row, column) {
	var key = row+','+column;
	if(highForests.indexOf(key)!=-1) {
		return true;
	}
	return false;
}
function isHill(row, column) {
	var key = row+','+column;
	if(hills.indexOf(key)!=-1) {
		return true;
	}
	return false;
}
function isGrass(row, column) {
	var key = row+','+column;
	if(grasses.indexOf(key)!=-1) {
		return true;
	}
	return false;
}
function isSwamp(row, column) {
	var key = row+','+column;
	if(swamps.indexOf(key)!=-1) {
		return true;
	}
	return false;
}
function prepareTileInfo() {
    for (var i = 0; i < row; i++) {
        tileInfo[i] = [];
        for (var j = 0; j < column; j++) {
			var tileKindId = 1;
			if(isRiver(i, j)==true) { tileKindId = 6; }
			else if(isBridge(i, j)==true) { tileKindId = 12; }
			else if(isForest(i, j)==true) { tileKindId = 3; }
			else if(isHighForest(i, j)==true) { tileKindId = 16; }
			else if(isHill(i, j)==true) { tileKindId = 15; }
			else if(isGrass(i, j)==true) { tileKindId = 2; }
			else if(isSwamp(i, j)==true) { tileKindId = 4; }
            tileInfo[i][j] = tileKindId;
        }
    }
}

function getTileColor(kindNo) {
    var result = '';
    if (kindNo == 0) {
        result = '#333333';
    } else if (kindNo == 1) {
        result = '#FFEAA9';
    } else if (kindNo == 2) {
        result = '#66FF66';
    } else if (kindNo == 3) {
        result = '#007F0E';
    } else if (kindNo == 4) {
        result = '#948A54';
    } else if (kindNo == 5) {
        result = '#30C0FF';
    } else if (kindNo == 6) {
        result = '#2080D0';
    } else if (kindNo == 7) {
        result = '#0000FF';
    } else if (kindNo == 8) {
        result = '#FFC000';
    } else if (kindNo == 9) {
        result = '#FAC090';
    } else if (kindNo == 10) {
        result = '#7030A0';
    } else if (kindNo == 11) {
        result = '#FF0000';
    } else if (kindNo == 12) {
        result = '#984807';
    } else if (kindNo == 13) {
        result = '#FF7C80';
    } else if (kindNo == 14) {
        result = '#FFE974';
    } else if (kindNo == 15) {
        result = '#FFAD5B';
    } else if (kindNo == 16) {
        result = '#004C00';
    }

    return result;
}

function getTileText(kindNo) {
    if (kindNo == 0) {
        result = 'X X';
    } else if (kindNo == 1) {
        result = '길';
    } else if (kindNo == 2) {
        result = '들판';
    } else if (kindNo == 3) {
        result = '숲';
    } else if (kindNo == 4) {
        result = '습지';
    } else if (kindNo == 5) {
        result = '얇은강';
    } else if (kindNo == 6) {
        result = '강';
    } else if (kindNo == 7) {
        result = '바다';
    } else if (kindNo == 8) {
        result = '항구';
    } else if (kindNo == 9) {
        result = '제방';
    } else if (kindNo == 10) {
        result = '독천';
    } else if (kindNo == 11) {
        result = '벼랑';
    } else if (kindNo == 12) {
        result = '다리';
    } else if (kindNo == 13) {
        result = '여울';
    } else if (kindNo == 14) {
        result = '지름길';
    } else if (kindNo == 15) {
        result = '언덕';
    } else if (kindNo == 16) {
        result = '숲산';
    }
    return result;
}
function getTileImage(kindId) {
	if(kindId==0) { return 'https://cdn.discordapp.com/attachments/839452894448975892/844762993056677912/00empty.png'; }
	else if(kindId==1) { return 'https://cdn.discordapp.com/attachments/839452894448975892/844762996043022346/01road.png'; }
	else if(kindId==2) { return 'https://cdn.discordapp.com/attachments/839452894448975892/844762997854306324/02grass.png'; }
	else if(kindId==3) { return 'https://cdn.discordapp.com/attachments/839452894448975892/844762998807855104/03forest.png'; }
	else if(kindId==4) { return 'https://cdn.discordapp.com/attachments/839452894448975892/844763000208228372/04swamp.png'; }
	else if(kindId==6) { return 'https://cdn.discordapp.com/attachments/839452894448975892/844763001844138025/06river.png'; }
	else if(kindId==12) { return 'https://cdn.discordapp.com/attachments/839452894448975892/844763003295105034/12bridge.png'; }
	else if(kindId==15) { return 'https://cdn.discordapp.com/attachments/839452894448975892/844763006574395462/15hill.png'; }
	else if(kindId==16) { return 'https://cdn.discordapp.com/attachments/839452894448975892/844763007329239060/16highForest.png'; }
}
function horizontalDistance() {
	var halfTileSize = tileSize/2;
    var quarterTileSize = halfTileSize/2;
    var aaa = halfTileSize + quarterTileSize;
    return aaa;
}
function verticalDistance() {
	var halfTileSize = tileSize/2;
    var quarterTileSize = halfTileSize/2;
    var aaa = Math.pow(halfTileSize, 2) - Math.pow(quarterTileSize, 2);
    return Math.sqrt(aaa)*2;
}
function calculateTileLeftTopPositionByTileId(left, top) {	
    var x = left*horizontalDistance();
    var y = top*verticalDistance();
	if(left%2==1) {
    	y += verticalDistance()/2;
    }
    return {
    	x: x,
        y: y
    }
}
function draw() {
	var padding = tileSize/2;
    var wrap = document.createElement('div');
	var wrapWidth = horizontalDistance()*row;    
	var wrapHeight = verticalDistance()*column;
    wrap.style.width = wrapWidth+'px';
    wrap.style.height = wrapHeight+'px';
    wrap.style.backgroundColor = '#c8c8c8';
    wrap.style.padding = padding+'px';
    document.body.appendChild(wrap);

    var count = row;
    var borderColor = '#1B387C';
    for (var i = 0; i < count; i++) {    
        var child;
        var childCount = column;
		var tileWidth = horizontalDistance();
        var tileHeight = verticalDistance();
        for (var j = 0; j < childCount; j++) {
			var positionInfo = calculateTileLeftTopPositionByTileId(i, j);
            
            child = document.createElement('div');            
            child.style.position = 'absolute';
            child.style.left = (positionInfo.x+padding*1.2)+'px';            
            child.style.top = (positionInfo.y+padding*0.7)+'px';
            child.style.width = tileWidth+'px';
			child.style.height = tileHeight+'px';
            child.style.lineHeight = (tileHeight/2)+'px';
            child.style.fontSize = '14px';
            child.style.color = '#000';
            /* child.style.border = '1px solid #000'; */
            
            var tileKindId = tileInfo[i][j];
            var bgSrc = getTileImage(tileKindId);            
            
            var imageWidth = tileWidth*1.3;
            var imageLeftDiff = (imageWidth - tileWidth)/2;
            var contentHtml = '';
            contentHtml += '<div style="position: absolute; left: -'+imageLeftDiff+'px">';
            contentHtml += '<img style="width: '+imageWidth+'px" src="'+bgSrc+'" />';
            contentHtml += '</div>';
            contentHtml += '<div style="position: absolute; width: '+tileWidth+'px; line-height: '+(tileHeight/2)+'px; text-align: center;">';
            contentHtml += getTileText(tileKindId)+'<br />'+i+','+j;
            contentHtml += '</div>';
            child.innerHTML = contentHtml;
            wrap.appendChild(child);
        }
    }
}
