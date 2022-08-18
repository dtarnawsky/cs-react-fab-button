import { IonContent, IonList, IonItem, IonFab, IonFabButton, IonIcon, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { camera } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer /> */}
        <IonFab aria-label={'new diary'} vertical='bottom' horizontal='end' slot='fixed'>
          <IonFabButton aria-label={'new diary'} routerLink="https://google.com">
            <IonIcon aria-label={'new diary'} icon={camera} />
          </IonFabButton>
        </IonFab>
        <IonList>
          <IonItem button>Item 1</IonItem>
          <IonItem button>Item 2</IonItem>
          <IonItem button>Item 3</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
