import { Models, Views, updateImage } from "@/types/Lost";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PageviewIcon from "@mui/icons-material/Pageview";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText
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
        <h2 className="text-center text-4xl my-4 pb-4 text-green-900 font-bold font-Itim mb-2 max-sm:my-6">
          Lotes disponibles con acabados de lujo
        </h2>
        <div className="flex justify-center items-center gap-8">
          <ButtonGroup
            variant="contained"
            aria-label="outlined button group"
          >
            <Button onClick={() => onModelChange("A")}>Modelo A</Button>
            <Button onClick={() => onModelChange("B")}>Modelo B</Button>
          </ButtonGroup>
        </div>

        <div className="grid grid-cols-4 my-4 gap-4 max-sm:flex max-sm:flex-col max-sm:mx-5">
          {/* Caracteristicas */}
          <div className="col-span-1 ">
            <h3 className="font-bold text-xl uppercase text-center ">
              Modelo A
            </h3>
            <p className="text-center font-bold text-lg max-sm:my-2">
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
                    <ListItemText primary="Áreas verdes" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <ListItemIcon>
                        <CheckCircleIcon className="text-green-700" />
                      </ListItemIcon>
                    </ListItemAvatar>
                    <ListItemText primary="Lavandería" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <ListItemIcon>
                        <CheckCircleIcon className="text-green-700" />
                      </ListItemIcon>
                    </ListItemAvatar>
                    <ListItemText primary="Comedor" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <ListItemIcon>
                        <CheckCircleIcon className="text-green-700" />
                      </ListItemIcon>
                    </ListItemAvatar>
                    <ListItemText primary="6 dormitorios" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <ListItemIcon>
                        <CheckCircleIcon className="text-green-700" />
                      </ListItemIcon>
                    </ListItemAvatar>
                    <ListItemText primary="Terraza" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <ListItemIcon>
                        <CheckCircleIcon className="text-green-700" />
                      </ListItemIcon>
                    </ListItemAvatar>
                    <ListItemText primary="Sala" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <ListItemIcon>
                        <CheckCircleIcon className="text-green-700" />
                      </ListItemIcon>
                    </ListItemAvatar>
                    <ListItemText primary="Cocina" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <ListItemIcon>
                        <CheckCircleIcon className="text-green-700" />
                      </ListItemIcon>
                    </ListItemAvatar>
                    <ListItemText primary="Estudio" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </div>
          {/* Image */}
          <div className="col-span-2">
            <div className="flex items-center justify-center h-full">
              <img
                src={estado.image}
                alt="Casa"
                className="w-full rounded-lg"
              />
            </div>
          </div>
          {/* Actions */}
          <div className="col-span-1">
            <div className="drop-shadow-2xl bg-white rounded-lg">
              <h2 className="text-xl font-bold text-center py-4">
                Vistas disponibles
              </h2>
              <List sx={{ p: 0 }}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => onViewChange("A")}>
                    <ListItemIcon>
                      <PageviewIcon />
                    </ListItemIcon>
                    <ListItemText primary="Vista A" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => onViewChange("B")}>
                    <ListItemIcon>
                      <PageviewIcon />
                    </ListItemIcon>
                    <ListItemText primary="Vista B" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => onViewChange("C")}>
                    <ListItemIcon>
                      <PageviewIcon />
                    </ListItemIcon>
                    <ListItemText primary="Vista C" />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelsLotes;
