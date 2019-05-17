calculate = function () {
    var checkOne = document.getElementById("selectOne");
    var selectOne = checkOne.options[checkOne.selectedIndex].value;
    var checkTwo = document.getElementById("selectTwo");
    var selectTwo = checkTwo.options[checkTwo.selectedIndex].value;
    console.log (selectOne + ' ' + selectTwo);

    if (selectOne == 'c' && selectTwo == 'f') {
        if ((document.activeElement.id == 'box_1') || (document.activeElement.id == 'selectOne')){
            var firstTemp = document.getElementById("box_1").value;
            document.getElementById('box_2').value = Math.floor((firstTemp*9/5 + 32) * 100) / 100;
        } else if ((document.activeElement.id == 'box_2') || (document.activeElement.id == 'selectTwo')) {
            var secondTemp = document.getElementById("box_2").value;
            document.getElementById("box_1").value = Math.floor((secondTemp - 32) * 5 / 9 * 100) / 100;
        }
    } else if (selectOne == 'c' && selectTwo == 'c') {
        if ((document.activeElement.id == 'box_1') || (document.activeElement.id == 'selectOne')) {
            var firstTemp = document.getElementById("box_1").value;
            document.getElementById('box_2').value = firstTemp;
        } else if ((document.activeElement.id == 'box_2') || (document.activeElement.id == 'selectTwo')) {
            var secondTemp = document.getElementById("box_2").value;
            document.getElementById("box_1").value = secondTemp;
        }
    } else if (selectOne == 'c' && selectTwo == 'k') {
        if ((document.activeElement.id == 'box_1') || (document.activeElement.id == 'selectOne')) {
            var firstTemp = parseInt(document.getElementById("box_1").value);
            document.getElementById('box_2').value = Math.floor((firstTemp + 273.15) * 100) / 100;
        } else if ((document.activeElement.id == 'box_2') || (document.activeElement.id == 'selectTwo')) {
            var secondTemp = document.getElementById("box_2").value;
            document.getElementById("box_1").value = Math.floor((secondTemp - 273.15) * 100) / 100;
        }
    } else if (selectOne == 'f' && selectTwo == 'c') {
        if ((document.activeElement.id == 'box_1') || (document.activeElement.id == 'selectOne')) {
            var firstTemp = document.getElementById("box_1").value;
            document.getElementById('box_2').value = Math.floor((firstTemp - 32) * 5 / 9 * 100) / 100;
        } else if ((document.activeElement.id == 'box_2') || (document.activeElement.id == 'selectTwo')) {
            var secondTemp = document.getElementById("box_2").value;
            document.getElementById("box_1").value = Math.floor((secondTemp*9/5 + 32) * 100) / 100;
        }
    } else if (selectOne == 'f' && selectTwo == 'k') {
        if ((document.activeElement.id == 'box_1') || (document.activeElement.id == 'selectOne')) {
            var firstTemp = document.getElementById("box_1").value;
            document.getElementById('box_2').value = Math.floor(((firstTemp - 32) * 5 / 9 + 273.15) * 100) / 100;
        } else if ((document.activeElement.id == 'box_2') || (document.activeElement.id == 'selectTwo')) {
            var secondTemp = document.getElementById("box_2").value;
            document.getElementById("box_1").value = Math.floor(((secondTemp - 273.15) * 9 / 5 + 32) * 100) / 100;
        }
    } else if (selectOne == 'f' && selectTwo == 'f') {
        if ((document.activeElement.id == 'box_1') || (document.activeElement.id == 'selectOne')) {
            var firstTemp = document.getElementById("box_1").value;
            document.getElementById('box_2').value = firstTemp;
        } else if ((document.activeElement.id == 'box_2') || (document.activeElement.id == 'selectTwo')) {
            var secondTemp = document.getElementById("box_2").value;
            document.getElementById("box_1").value = secondTemp;
        }
    } else if (selectOne == 'k' && selectTwo == 'c') {
        if ((document.activeElement.id == 'box_1') || (document.activeElement.id == 'selectOne')) {
            var firstTemp = document.getElementById("box_1").value;
            document.getElementById('box_2').value = Math.floor((firstTemp - 273.15) * 100) / 100;
        } else if ((document.activeElement.id == 'box_2') || (document.activeElement.id == 'selectTwo')) {
            var secondTemp = document.getElementById("box_2").value;
            document.getElementById("box_1").value = Math.floor((secondTemp + 273.15) * 100) / 100;
        }
    } else if (selectOne == 'k' && selectTwo == 'f') {
        if ((document.activeElement.id == 'box_1') || (document.activeElement.id == 'selectOne')) {
            var firstTemp = document.getElementById("box_1").value;
            document.getElementById('box_2').value = Math.floor(((firstTemp - 273.15) * 9 / 5 + 32) * 100) / 100;
        } else if ((document.activeElement.id == 'box_2') || (document.activeElement.id == 'selectTwo')) {
            var secondTemp = document.getElementById("box_2").value;
            document.getElementById("box_1").value = Math.floor(((secondTemp - 32) * 5 / 9 + 273.15) * 100) / 100;
        }
    } else if (selectOne == 'k' && selectTwo == 'k') {
        if ((document.activeElement.id == 'box_1') || (document.activeElement.id == 'selectOne')) {
            var firstTemp = document.getElementById("box_1").value;
            document.getElementById('box_2').value = firstTemp;
        } else if ((document.activeElement.id == 'box_2') || (document.activeElement.id == 'selectTwo')) {
            var secondTemp = document.getElementById("box_2").value;
            document.getElementById("box_1").value = secondTemp;
        }
    }
}
