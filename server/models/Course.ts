import { Ref, getModelForClass, prop } from "@typegoose/typegoose";
export interface ICourse {
  name: string;
  image: { filename: string; alt: string };
  card: {
    header: string;
    description: string;
    price: number;
    tag: string;
  };
}
class ImageSchema {
  @prop()
  public filename!: string;
  @prop()
  public alt!: string;
}
class CardSchema {
  @prop()
  public header!: string;
  @prop()
  public description!: string;
  @prop()
  public price!: number;
  @prop()
  public tag?: boolean;
}
class CourseSchema {
  @prop({ unique: true })
  public name!: string;
  @prop({ ref: CardSchema })
  public card!: Ref<CardSchema>;
  @prop({ ref: ImageSchema })
  public image!: Ref<ImageSchema>;
}
export default getModelForClass(CourseSchema);
