
type ListenerFn<T> = (data: T[]) => void;

class Provider { 
    private static instance: Provider;

    private constructor() { }

    public static getInstance() : Provider {
        if (!Provider.instance)
            Provider.instance = new Provider();

        return Provider.instance;
    }

    private items: any[] = [];
    public listenerFns: ListenerFn<any>[] = [];

    public addListenerFns(fn: ListenerFn<any>) {
        this.listenerFns.push(fn);
    }

    public addItem(title: string, desc: string): void {
        const newItem = { title, desc };

        this.items.push(newItem);
        this.notifyListeners();
    }

    private notifyListeners(): void {
        for(let listenerFn of this.listenerFns) {
            listenerFn(this.items);
        }
    }
}

export default Provider;