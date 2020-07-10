import { getModelForClass, prop } from "@typegoose/typegoose";

// Course Schema
class FurtherInformation {
  @prop({ required: true })
  public icon!: any;
  @prop({ required: true })
  public text!: string;
}

class Image {
  @prop({ required: true })
  public alt!: string;
  @prop({ required: true })
  public filename!: string;
}

class Card {
  @prop({ required: true })
  public header!: string;
  @prop({ required: true })
  public description!: string;
  @prop({ required: true })
  public price!: number;
  @prop()
  public furtherInformation?: FurtherInformation;
  @prop({ required: true })
  public tag?: string;
}

class Course {
  @prop({ unique: true })
  public name!: string;
  @prop({ required: true })
  public card!: Card;
  @prop({ required: true })
  public image!: Image;
}
export default getModelForClass(Course);
