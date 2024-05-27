import { useRouter } from "next/router";
import { EventContext, EventProvider } from "./store";
import { useContext, useEffect, useState } from "react";
import { fetchDummyDaTA } from "../../src/utils";
import { AnimeDataType } from "./types";
import { updateEvent } from "./action";
import Card from "@mui/material/Card";
import { Button, CardActions, CardContent, Typography } from "@mui/material";

const AllEventsPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useContext(EventContext);
  console.log(state, "state");
  const init = async () => {
    setLoading(true);
    const data: AnimeDataType = await fetchDummyDaTA();
    console.log(data, "datadata");
    dispatch(
      updateEvent({
        animeData: data,
      })
    );

    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  console.log(router.query);
  return (
    <div>
      AllEventsPage
      <main>
        {loading ? (
          "loading..."
        ) : (
          <div>
            {state.animeData.map((anime) => {
              return (
                <Card key={anime.id} style={{ marginBottom: 6 }}>
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      <div>{anime.title}</div>
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <div>{anime.genre}</div>
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <div>{anime.year}</div>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="info"
                      onClick={() => {
                        router.push({
                          pathname: "/events/[id]",
                          query: {
                            id: anime.id,
                          },
                        });
                      }}
                      size="small"
                    >
                      更多
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default AllEventsPage;
