var names=new Array();
names[0]="Yaakov";
names[1]="Jerry";
names[2]="james";
names[3]="Andrew";
names[4]="Jason";
names[5]="franklin";
names[6]="larry";
names[7]="paula";
names[8]="Jack";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}