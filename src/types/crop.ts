export interface Crop {
  id: string;
  name: string;
  localName: string;
  image: string;
  growthPeriod: number; // in days
  season: string;
  seedCost: number; // per kg
  seedQuantity: number; // kg per acre
  waterRequirement: number; // liters per day per acre
  totalCost: number; // per acre
  expectedYield: number; // kg per acre
  marketPrice: number; // per kg
  revenue: number; // per acre
  profit: number; // per acre
  description: string;
  tips: string[];
}

export interface ChatMessage {
  id: string;
  message: string;
  isUser: boolean;
  timestamp: Date;
  cropData?: Crop;
}