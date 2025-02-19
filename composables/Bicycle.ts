export default class Bicycle {
    id!: number;
    model!: string;
    batteryCapacity!: number;
    price!: number;
    onSell: boolean;
    motor: string;
    imageBase64?: string;  // base64 image string
    wheelSize: number;
  
    constructor(data: any) {
      this.id = data.id;
      this.model = data.model;
      this.batteryCapacity = data.batteryCapacity;
      this.wheelSize = data.wheelSize;
      this.price = data.price;
      this.onSell = data.onSell;
      this.motor = data.motor;
      this.imageBase64 = data.imageBase64;
    }
  
    // Add computed property for base64 image string if image data exists
    get imageBase64Converted() {
      return this.imageBase64 ? `data:image/jpeg;base64,${this.imageBase64}` : '';
    }
  }