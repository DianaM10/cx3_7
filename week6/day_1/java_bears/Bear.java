class Bear{
  private String name;
  private int age;
  private double weight;
  private char gender;

//constructor
  public Bear(String inputName, int age, double weight, char gender){
    this.name = inputName;
    this.age = age;
    this.weight = weight;
    this.gender = gender;
  }

  public char getGender(){
    return this.gender;
  }

  public double getWeight(){
    return this.weight;
  }

  public int getAge(){
      return this.age;
  }

  public void setAge(int age){
    this.age = age;

  }

//getter
  public String getName(){
    return this.name;
  }

  public void setName(String newName){
    this.name = newName;
  }

  public boolean readyToHibernate(){
    return this.weight >= 80.00;
  }


}