import {
  Models,
  Views,
  characteristicsData,
  stateLotes,
  updateImage,
} from "@/types/Lost";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PageviewIcon from "@mui/icons-material/Pageview";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

const ModelsLotes = () => {
  const [estado, setEstado] = useState<stateLotes>({
    model: "A",
    view: "PRINCIPAL",
    image: updateImage.PRINCIPAL.A,
    characteristics: characteristicsData.A,
  });
  const [expanded, setExpanded] = useState<string | false>("characters-panel");

  const onAccordionChange =
    (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const onModelChange = (model: Models) => {
    setEstado({
      ...estado,
      model,
      image: updateImage[estado.view][model],
      characteristics: characteristicsData[model],
    });
  };

  const onViewChange = (view: Views) => {
    setEstado({ ...estado, view, image: updateImage[view][estado.model] });
  };

  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-center text-4xl py-4 text-green-900 font-bold font-Itim mb-2 max-sm:my-6">
          Lotes disponibles con acabados de lujo
        </h2>
        <div className="flex justify-center items-center gap-8">
          <ButtonGroup variant="contained" aria-label="outlined button group">
            <Button onClick={() => onModelChange("A")}>Modelo A</Button>
            <Button onClick={() => onModelChange("B")}>Modelo B</Button>
          </ButtonGroup>
        </div>

        <div className="grid grid-cols-4 py-4 gap-4 max-sm:flex max-sm:flex-col max-sm:mx-5">
          {/* Caracteristicas */}
          <div className="col-span-1">
            <h3 className="font-bold text-xl uppercase text-center">
              Modelo {estado.model}
            </h3>
            <h3 className="font-bold text-gray-600 text-xl uppercase text-center">
              Vista {estado.view}
            </h3>
            <p className="text-center font-bold text-lg max-sm:my-2 text-gray-800">
              Áreas desde desde 265m2 a 350m2
            </p>
            <Accordion
              expanded={expanded === "characters-panel"}
              onChange={onAccordionChange("characters-panel")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="characters-content"
                id="characters-header"
              >
                <h2 className="font-semibold text-lg">Caracteristicas</h2>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {estado.characteristics.map((characteristic, index) => (
                    <ListItem key={index}>
                      <ListItemAvatar>
                        <ListItemIcon>
                          <CheckCircleIcon className="text-green-700" />
                        </ListItemIcon>
                      </ListItemAvatar>
                      <ListItemText primary={characteristic} />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </div>
          {/* Image */}
          <div className="col-span-2">
            <div className="flex items-center justify-center h-full">
              <div className="w-full  overflow-hidden">
                <img
                  src={estado.image}
                  alt="Casa"
                  className="w-full rounded-lg object-cover h-auto"
                />
              </div>
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
                  <ListItemButton onClick={() => onViewChange("PRINCIPAL")}>
                    <ListItemIcon>
                      <PageviewIcon />
                    </ListItemIcon>
                    <ListItemText primary="FACHADA PRINCIPAL" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => onViewChange("POSTERIOR")}>
                    <ListItemIcon>
                      <PageviewIcon />
                    </ListItemIcon>
                    <ListItemText primary="FACHADA POSTERIOR" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => onViewChange("PRIMER_PISO")}>
                    <ListItemIcon>
                      <PageviewIcon />
                    </ListItemIcon>
                    <ListItemText primary="PLANO PRIMER PISO" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => onViewChange("SEGUNDO_PISO")}>
                    <ListItemIcon>
                      <PageviewIcon />
                    </ListItemIcon>
                    <ListItemText primary="PLANO SEGUNDO PISO" />
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
