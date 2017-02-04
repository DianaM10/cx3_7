import java.util.ArrayList;

public class PetShop{

  private ArrayList<Pet> stock;

  public PetShop(){
    stock = new ArrayList<Pet>();
  }

  public Pet findPetByName(String searchName) throws NullStringException {    //declare the throwing of the exception or it won't compile
    if (searchName == null) {
      throw new NullStringException("cannot search for a pet with null insted of a name String");
  }
    String searchLower = searchName.toLowerCase();
    for (Pet pet : stock){
      String petName = pet.getName().toLowerCase();
      if ( petName.equals(searchLower) ) {return pet;
      }
    }
    return null;
  }

  public void addPet(Pet pet){
    stock.add(pet);
  }

}