import { View, Text, ScrollView, StyleSheet } from 'react-native';
import TacheCard from '../components/TacheCard';
import { COULEURS } from '../styles/couleurs';

const TACHES = [
    { id: 1, titre: 'Créer la maquette',     categorie: 'Design', terminee: true  },
    { id: 2, titre: 'Installer Expo',        categorie: 'Setup',  terminee: true  },
    { id: 3, titre: 'Composant TacheCard',   categorie: 'Dev',    terminee: false },
    { id: 4, titre: 'Écran d\'accueil',      categorie: 'Dev',    terminee: false },
    { id: 5, titre: 'Tester sur téléphone',  categorie: 'QA',     terminee: false },
];

export default function AccueilScreen(){
    return(
        <View style={styles.ecran}>
            <View style={styles.entete}>
                <Text style={styles.titre}>TaskFlow</Text>
                <Text style={styles.sousTitre}>Vos tâches du moment</Text>
            </View>

            <ScrollView contentContainerStyle={styles.liste}>
                {TACHES.map((tache) => (
                    <TacheCard
                        key={tache.id}
                        titre={tache.titre}
                        categorie={tache.categorie}
                        terminee={tache.terminee}
                    />
                ))}
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
  ecran:     { flex: 1, backgroundColor: COULEURS.fond, paddingTop: 50 },
  entete:    { paddingHorizontal: 16, paddingBottom: 12 },
  titre:     { fontSize: 20, fontWeight: 'bold', color: COULEURS.title },
  sousTitre: { color: COULEURS.muted },
  liste:     { paddingHorizontal: 16, gap: 12, paddingBottom: 20 },
});