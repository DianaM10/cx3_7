class Runner{

  public static void main(String[] args)
  {
    Planet planet = new Planet("Mars", 908973);
    String name = planet.getName();
    long size = planet.getSize();
    // String output = String.format("%s is %d", name, size)
    System.out.println(planet.getName() + " is " + planet.getSize());
    planet.explode();
  }
}