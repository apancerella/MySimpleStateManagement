import Provider from './provider';

const p1 = Provider.getInstance();
p1.addListenerFns((items: any[]) => { console.log(items) });

const p2 = Provider.getInstance();

p2.addItem("test1", "test description")