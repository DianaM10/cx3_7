public class ExampleTryCatch{
  PetShop shop;

  public void run(){
    setup();

    Pet found = null;

    try {
      found = shop.findPetByName(null);
  }
    catch (NullStringException ex) {
      ex.printStackTrace(); //trace where it came from
      System.out.println("Exception message:");
      System.out.println(ex.getMessage());
    }

    finally {
      System.out.println(".....and finally");
    }


    System.out.println("Found pet: " + found.getName());
  }

  public void setup(){
    shop = new PetShop();
    shop.addPet(new Dog("Rover"));
    shop.addPet(new Cat("MEOWingtons"));
    shop.addPet(new Fish("FINlay"));
  }
}
