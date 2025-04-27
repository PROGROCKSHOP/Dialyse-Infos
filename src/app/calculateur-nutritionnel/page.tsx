"use client"

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

// Type pour un aliment dans la base de données
type FoodItem = {
  id: string;
  name: string;
  potassium: number;
  phosphore: number;
  sodium: number;
  portion: string;
};

// Type pour un aliment sélectionné par l'utilisateur
type SelectedFood = {
  id: string;
  name: string;
  potassium: number;
  phosphore: number;
  sodium: number;
  quantity: number;
};

export default function CalculateurNutritionPage() {
  // État pour stocker les aliments sélectionnés
  const [selectedFoods, setSelectedFoods] = useState<SelectedFood[]>([]);

  // État pour les limites quotidiennes (en mg)
  const [limits, setLimits] = useState({
    potassium: 2000, // mg par jour
    phosphore: 800, // mg par jour
    sodium: 2000, // mg par jour
  });

  // Base de données d'aliments
  const foodDatabase = {
    fruits: [
      { id: "pomme", name: "Pomme", potassium: 107, phosphore: 7, sodium: 1, portion: "1 moyenne (150g)" },
      { id: "banane", name: "Banane", potassium: 422, phosphore: 23, sodium: 1, portion: "1 moyenne (120g)" },
      { id: "orange", name: "Orange", potassium: 237, phosphore: 14, sodium: 0, portion: "1 moyenne (150g)" },
      { id: "fraise", name: "Fraises", potassium: 153, phosphore: 24, sodium: 1, portion: "1 tasse (150g)" },
      { id: "abricot", name: "Abricot", potassium: 259, phosphore: 23, sodium: 1, portion: "3 abricots (140g)" },
    ] as FoodItem[],
    legumes: [
      { id: "carotte", name: "Carotte", potassium: 320, phosphore: 35, sodium: 69, portion: "1 tasse (150g)" },
      { id: "tomate", name: "Tomate", potassium: 427, phosphore: 43, sodium: 9, portion: "1 moyenne (150g)" },
      { id: "pommedeterre", name: "Pomme de terre", potassium: 610, phosphore: 78, sodium: 24, portion: "1 moyenne (150g)" },
      { id: "epinard", name: "Epinards", potassium: 558, phosphore: 49, sodium: 79, portion: "1 tasse (150g)" },
      { id: "courgette", name: "Courgette", potassium: 261, phosphore: 38, sodium: 3, portion: "1 tasse (150g)" },
    ] as FoodItem[],
    proteines: [
      { id: "poulet", name: "Poulet", potassium: 220, phosphore: 173, sodium: 77, portion: "100g" },
      { id: "boeuf", name: "Bœuf", potassium: 318, phosphore: 215, sodium: 80, portion: "100g" },
      { id: "poisson", name: "Poisson blanc", potassium: 302, phosphore: 174, sodium: 82, portion: "100g" },
      { id: "oeuf", name: "Œuf", potassium: 63, phosphore: 86, sodium: 71, portion: "1 œuf (50g)" },
      { id: "fromage", name: "Fromage", potassium: 79, phosphore: 146, sodium: 622, portion: "30g" },
    ] as FoodItem[],
    feculents: [
      { id: "pain", name: "Pain blanc", potassium: 117, phosphore: 77, sodium: 502, portion: "2 tranches (60g)" },
      { id: "riz", name: "Riz blanc", potassium: 43, phosphore: 43, sodium: 1, portion: "1 tasse cuit (150g)" },
      { id: "pates", name: "Pâtes", potassium: 31, phosphore: 42, sodium: 1, portion: "1 tasse cuites (150g)" },
      { id: "lentilles", name: "Lentilles", potassium: 365, phosphore: 180, sodium: 2, portion: "1 tasse cuites (150g)" },
      { id: "avoine", name: "Flocons d'avoine", potassium: 143, phosphore: 180, sodium: 2, portion: "1/2 tasse (40g)" },
    ] as FoodItem[],
  };

  // Fonction pour ajouter un aliment à la sélection
  const addFood = (food: FoodItem) => {
    const existingFood = selectedFoods.find(f => f.id === food.id);

    if (existingFood) {
      // Si l'aliment existe déjà, augmenter la quantité
      setSelectedFoods(selectedFoods.map(f =>
        f.id === food.id ? { ...f, quantity: f.quantity + 1 } : f
      ));
    } else {
      // Sinon, ajouter l'aliment avec une quantité de 1
      setSelectedFoods([...selectedFoods, {
        id: food.id,
        name: food.name,
        potassium: food.potassium,
        phosphore: food.phosphore,
        sodium: food.sodium,
        quantity: 1
      }]);
    }
  };

  // Fonction pour supprimer un aliment de la sélection
  const removeFood = (foodId: string) => {
    setSelectedFoods(selectedFoods.filter(food => food.id !== foodId));
  };

  // Fonction pour modifier la quantité d'un aliment
  const updateFoodQuantity = (foodId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFood(foodId);
      return;
    }

    setSelectedFoods(selectedFoods.map(food =>
      food.id === foodId ? { ...food, quantity } : food
    ));
  };

  // Calculs totaux
  const totals = {
    potassium: selectedFoods.reduce((acc, food) => acc + (food.potassium * food.quantity), 0),
    phosphore: selectedFoods.reduce((acc, food) => acc + (food.phosphore * food.quantity), 0),
    sodium: selectedFoods.reduce((acc, food) => acc + (food.sodium * food.quantity), 0),
  };

  // Pourcentages des limites
  const percentages = {
    potassium: Math.min(100, (totals.potassium / limits.potassium) * 100),
    phosphore: Math.min(100, (totals.phosphore / limits.phosphore) * 100),
    sodium: Math.min(100, (totals.sodium / limits.sodium) * 100),
  };

  // Statuts (OK, Attention, Alerte)
  const getStatus = (percentage: number) => {
    if (percentage < 70) return { text: "OK", color: "text-green-600 dark:text-green-400" };
    if (percentage < 90) return { text: "Attention", color: "text-amber-600 dark:text-amber-400" };
    return { text: "Alerte", color: "text-red-600 dark:text-red-400" };
  };

  // Le reste du code reste inchangé...
  return (
    <>
      {/* Header */}
      <section className="bg-blue-50 dark:bg-blue-950 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4">
              Calculateur nutritionnel
            </h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              Suivez vos apports quotidiens en potassium, phosphore et sodium
            </p>
          </div>
        </div>
      </section>

      {/* Main Calculator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Food Selection Panel */}
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Aliments disponibles</CardTitle>
                  <CardDescription>
                    Sélectionnez les aliments que vous souhaitez consommer aujourd'hui
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="fruits">
                    <TabsList className="w-full flex justify-start overflow-auto mb-4">
                      <TabsTrigger value="fruits">Fruits</TabsTrigger>
                      <TabsTrigger value="legumes">Légumes</TabsTrigger>
                      <TabsTrigger value="proteines">Protéines</TabsTrigger>
                      <TabsTrigger value="feculents">Féculents</TabsTrigger>
                    </TabsList>
                    <TabsContent value="fruits" className="space-y-4">
                      {foodDatabase.fruits.map((food) => (
                        <div key={food.id} className="flex items-center justify-between p-3 border rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/10">
                          <div>
                            <h3 className="font-medium">{food.name}</h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">{food.portion}</p>
                            <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                              <span className="mr-2">K: {food.potassium}mg</span>
                              <span className="mr-2">P: {food.phosphore}mg</span>
                              <span>Na: {food.sodium}mg</span>
                            </div>
                          </div>
                          <Button size="sm" onClick={() => addFood(food)}>
                            Ajouter
                          </Button>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="legumes" className="space-y-4">
                      {foodDatabase.legumes.map((food) => (
                        <div key={food.id} className="flex items-center justify-between p-3 border rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/10">
                          <div>
                            <h3 className="font-medium">{food.name}</h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">{food.portion}</p>
                            <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                              <span className="mr-2">K: {food.potassium}mg</span>
                              <span className="mr-2">P: {food.phosphore}mg</span>
                              <span>Na: {food.sodium}mg</span>
                            </div>
                          </div>
                          <Button size="sm" onClick={() => addFood(food)}>
                            Ajouter
                          </Button>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="proteines" className="space-y-4">
                      {foodDatabase.proteines.map((food) => (
                        <div key={food.id} className="flex items-center justify-between p-3 border rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/10">
                          <div>
                            <h3 className="font-medium">{food.name}</h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">{food.portion}</p>
                            <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                              <span className="mr-2">K: {food.potassium}mg</span>
                              <span className="mr-2">P: {food.phosphore}mg</span>
                              <span>Na: {food.sodium}mg</span>
                            </div>
                          </div>
                          <Button size="sm" onClick={() => addFood(food)}>
                            Ajouter
                          </Button>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="feculents" className="space-y-4">
                      {foodDatabase.feculents.map((food) => (
                        <div key={food.id} className="flex items-center justify-between p-3 border rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/10">
                          <div>
                            <h3 className="font-medium">{food.name}</h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">{food.portion}</p>
                            <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                              <span className="mr-2">K: {food.potassium}mg</span>
                              <span className="mr-2">P: {food.phosphore}mg</span>
                              <span>Na: {food.sodium}mg</span>
                            </div>
                          </div>
                          <Button size="sm" onClick={() => addFood(food)}>
                            Ajouter
                          </Button>
                        </div>
                      ))}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Selected Foods */}
              <Card>
                <CardHeader>
                  <CardTitle>Aliments sélectionnés</CardTitle>
                  <CardDescription>
                    Les aliments que vous avez choisis pour votre journée
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedFoods.length === 0 ? (
                    <div className="text-center py-8 text-zinc-500 dark:text-zinc-400">
                      Aucun aliment sélectionné. Ajoutez des aliments depuis les onglets ci-dessus.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {selectedFoods.map((food) => (
                        <div key={food.id} className="flex items-center justify-between p-3 border rounded-md">
                          <div className="flex-1">
                            <h3 className="font-medium">{food.name}</h3>
                            <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                              <span className="mr-2">K: {food.potassium * food.quantity}mg</span>
                              <span className="mr-2">P: {food.phosphore * food.quantity}mg</span>
                              <span>Na: {food.sodium * food.quantity}mg</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateFoodQuantity(food.id, food.quantity - 1)}
                            >
                              -
                            </Button>
                            <span>{food.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateFoodQuantity(food.id, food.quantity + 1)}
                            >
                              +
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => removeFood(food.id)}
                            >
                              Supprimer
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Summary Panel */}
            <div>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>Résumé quotidien</CardTitle>
                  <CardDescription>
                    Vos apports en minéraux par rapport aux limites recommandées
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-8">
                  {/* Potassium */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">Potassium</h3>
                      <span className={getStatus(percentages.potassium).color}>
                        {getStatus(percentages.potassium).text}
                      </span>
                    </div>
                    <Progress value={percentages.potassium} className="h-2 mb-1" />
                    <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400">
                      <span>{totals.potassium} mg</span>
                      <span>{limits.potassium} mg</span>
                    </div>
                  </div>

                  {/* Phosphore */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">Phosphore</h3>
                      <span className={getStatus(percentages.phosphore).color}>
                        {getStatus(percentages.phosphore).text}
                      </span>
                    </div>
                    <Progress value={percentages.phosphore} className="h-2 mb-1" />
                    <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400">
                      <span>{totals.phosphore} mg</span>
                      <span>{limits.phosphore} mg</span>
                    </div>
                  </div>

                  {/* Sodium */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">Sodium</h3>
                      <span className={getStatus(percentages.sodium).color}>
                        {getStatus(percentages.sodium).text}
                      </span>
                    </div>
                    <Progress value={percentages.sodium} className="h-2 mb-1" />
                    <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400">
                      <span>{totals.sodium} mg</span>
                      <span>{limits.sodium} mg</span>
                    </div>
                  </div>

                  {/* Personnalisation des limites */}
                  <div className="mt-auto pt-6 border-t">
                    <h3 className="font-medium mb-2">Personnaliser vos limites</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm text-zinc-600 dark:text-zinc-400 block mb-1">
                          Potassium (mg/jour)
                        </label>
                        <input
                          type="number"
                          value={limits.potassium}
                          onChange={(e) => setLimits({ ...limits, potassium: Number(e.target.value) })}
                          className="w-full p-2 border rounded-md"
                          min="500"
                          max="4000"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-zinc-600 dark:text-zinc-400 block mb-1">
                          Phosphore (mg/jour)
                        </label>
                        <input
                          type="number"
                          value={limits.phosphore}
                          onChange={(e) => setLimits({ ...limits, phosphore: Number(e.target.value) })}
                          className="w-full p-2 border rounded-md"
                          min="400"
                          max="1500"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-zinc-600 dark:text-zinc-400 block mb-1">
                          Sodium (mg/jour)
                        </label>
                        <input
                          type="number"
                          value={limits.sodium}
                          onChange={(e) => setLimits({ ...limits, sodium: Number(e.target.value) })}
                          className="w-full p-2 border rounded-md"
                          min="1000"
                          max="3000"
                        />
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-2">
                        Ajustez ces valeurs selon les recommandations de votre néphrologue ou diététicien.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6 text-center">
              Comprendre les minéraux en dialyse
            </h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Le potassium</h3>
                <p className="mb-3">
                  Le potassium est un minéral essentiel, mais les patients dialysés doivent surveiller leur apport car des niveaux trop élevés peuvent affecter le rythme cardiaque.
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  <strong>Aliments riches en potassium :</strong> bananes, oranges, tomates, pommes de terre, épinards, avocats, chocolat noir, fruits secs.
                </p>
              </div>

              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Le phosphore</h3>
                <p className="mb-3">
                  Le phosphore s'accumule dans le sang des patients dialysés et peut contribuer à la déminéralisation osseuse et à la calcification vasculaire.
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  <strong>Aliments riches en phosphore :</strong> produits laitiers, viande rouge, volaille, poisson, noix, légumineuses, boissons gazeuses, additifs alimentaires (E338-E341).
                </p>
              </div>

              <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Le sodium</h3>
                <p className="mb-3">
                  Le sodium contribue à la soif, à la rétention d'eau et à l'hypertension. Limiter le sel est important pour contrôler la prise de poids entre les séances de dialyse.
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  <strong>Aliments riches en sodium :</strong> sel de table, aliments transformés, conserves, charcuterie, fromages, sauces industrielles, bouillons cubes, plats préparés.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Conseils pratiques</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Consultez régulièrement votre diététicien pour adapter vos apports à vos besoins spécifiques.</li>
                  <li>Faites tremper les légumes coupés dans l'eau pendant au moins 2 heures avant cuisson pour réduire leur teneur en potassium.</li>
                  <li>Privilégiez les aliments frais et cuisinez vous-même pour contrôler les ingrédients.</li>
                  <li>Utilisez des herbes, épices et aromates pour remplacer le sel.</li>
                  <li>Lisez attentivement les étiquettes et méfiez-vous des additifs phosphatés (E338 à E341).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
