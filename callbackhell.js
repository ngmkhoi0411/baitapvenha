//vidu callback
function lamviec()
{console.log('kho hieu qua troi');}
function kolamviec(doCallback)
{doCallback() ;}
kolamviec(lamviec);

//vidu callbackhell
function ngu_day(lamviec)
{lamviec();}
function danh_rang(lamviec)
{lamviec();}
function an_sang(lamviec)
{lamviec();}
function main() {
    ngu_day(function () {
        console.log('da ngu day');
        danh_rang(function () {
            console.log('da danh rang');
            an_sang(function () {console.log('da an sang');
        });
    });
});
}
main()

