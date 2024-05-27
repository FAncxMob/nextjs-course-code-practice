import { useRouter } from "next/router";
import { useContext } from "react";
import { EventContext, EventProvider } from "../store";
import { Card, CardContent, Typography } from "@mui/material";

const EventDetailPage = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(EventContext);
  const id = router.query.id;

  const item = state.animeData.find((item) => item.id === id);

  console.log(state, router.query, "router");
  return (
    <div>
      EventDetailPage
      {item ? (
        <div>
          <Card style={{ marginBottom: 6 }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                <div>{item.title}</div>
              </Typography>
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                <div className="mb4">{item.genre}</div>
                <div className="mb4">{item.year}</div>
                <div className="mb4">{item.details.description}</div>
                <div className="mb4">
                  episodes:
                  <span className="ml10">{item.details.episodes}话</span>{" "}
                </div>
                <div className="mb4">
                  rating: <span className="ml10">{item.details.rating}分</span>
                </div>
                studios:
                <span className="ml10">
                  {item.details.studios.map((item) => item)}
                </span>
                <div className="mb4">
                  characters:
                  <div className="ml10">
                    {item.details.characters.map((item) => (
                      <div>{item.name + "  " + item.role}</div>
                    ))}
                  </div>
                </div>
              </Typography>
            </CardContent>
          </Card>
        </div>
      ) : (
        <Card style={{ marginBottom: 6 }}> 暂时没有相关数据</Card>
      )}
    </div>
  );
};

export default EventDetailPage;
