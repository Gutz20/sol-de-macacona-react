import { Models, Views, updateImage } from "@/types/Lost";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

const ModelsLotes = () => {
  const [estado, setEstado] = useState<{
    model: Models;
    view: Views;
    image: string;
  }>({
    model: "A",
    view: "A",
    image: updateImage.A.A,
  });

  const onModelChange = (model: Models) => {
    setEstado({ ...estado, model, image: updateImage[estado.view][model] });
  };

  const onViewChange = (view: Views) => {
    setEstado({ ...estado, view, image: updateImage[view][estado.model] });
  };
  
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-center text-2xl text-green-900 font-bold font-Itim mb-2">
          Lotes disponibles con acabados de lujo
        </h2>
        <div className="flex justify-center items-center gap-8">
          <Button
            onClick={() => onModelChange("A")}
            variant="contained"
          >
            Modelo A
          </Button>
          <Button
            onClick={() => onModelChange("B")}
            variant="contained"
          >
            Modelo B
          </Button>
        </div>

        <div className="grid grid-cols-4 my-4">
          {/* Caracteristicas */}
          <div className="col-span-1">
            <h3 className="font-bold text-xl uppercase text-center">
              Modelo A
            </h3>
            <p className="text-center font-bold text-lg">
              Área total: 48.35 m2
            </p>
            <Card>
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <ListItemIcon>
                        <CheckCircleIcon className="text-green-700" />
                      </ListItemIcon>
                    </ListItemAvatar>
                    <ListItemText primary="Dormitorio" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <ListItemIcon>
                        <CheckCircleIcon className="text-green-700" />
                      </ListItemIcon>
                    </ListItemAvatar>
                    <ListItemText primary="1 Baño" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <ListItemIcon>
                        <CheckCircleIcon className="text-green-700" />
                      </ListItemIcon>
                    </ListItemAvatar>
                    <ListItemText primary="Walk-in Closet" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <ListItemIcon>
                        <CheckCircleIcon className="text-green-700" />
                      </ListItemIcon>
                    </ListItemAvatar>
                    <ListItemText primary="Cocina Abierta" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <ListItemIcon>
                        <CheckCircleIcon className="text-green-700" />
                      </ListItemIcon>
                    </ListItemAvatar>
                    <ListItemText primary="Centro de Lavado" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </div>
          {/* Image */}
          <div className="col-span-2">
            <div className="flex items-center justify-center">
              <img
                src={estado.image}
                alt="Casa"
                className="w-[550px] h-[350px]"
              />
            </div>
          </div>
          {/* Actions */}
          <div className="col-span-1">
            <div className="flex flex-col gap-8 items-center justify-center h-full">
              <Button
                variant="contained"
                className="w-32"
                color="inherit"
                onClick={() => onViewChange("A")}
              >
                Vista A
              </Button>
              <Button
                variant="contained"
                className="w-32"
                color="inherit"
                onClick={() => onViewChange("B")}
              >
                Vista B
              </Button>
              <Button
                variant="contained"
                className="w-32"
                color="inherit"
                onClick={() => onViewChange("C")}
              >
                Vista C
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelsLotes;
