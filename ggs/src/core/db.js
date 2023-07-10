 async function openDatabase() {
    // 打开或创建IndexedDB数据库
    const request = indexedDB.open('myDatabase', 1);

    request.onupgradeneeded = (event) => {
      // 数据库升级时创建对象存储
      const db = event.target.result;
      db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
    };

    request.onsuccess = (event) => {
      // 打开数据库成功
      this.db = event.target.result;
      this.loadData();
    };

    request.onerror = (event) => {
      // 打开数据库出错
      console.error('Failed to open database:', event.target.error);
    };
  };

  async function loadData() {
    // 从IndexedDB加载数据
    if (!this.db) return;

    const transaction = this.db.transaction(this.storeName, 'readonly');
    const objectStore = transaction.objectStore(this.storeName);
    const request = objectStore.getAll();

    request.onsuccess = (event) => {
      this.data = event.target.result;
    };

    request.onerror = (event) => {
      console.error('Failed to load data:', event.target.error);
    };
  };
  async function saveData(item) {
    // 将数据保存到IndexedDB
    if (!this.db) return;

    const transaction = this.db.transaction(this.storeName, 'readwrite');
    const objectStore = transaction.objectStore(this.storeName);
    const request = objectStore.add(item);

    request.onsuccess = () => {
      this.data.push(item);
    };

    request.onerror = (event) => {
      console.error('Failed to save data:', event.target.error);
    };
  };