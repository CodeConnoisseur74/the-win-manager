import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import axios from "axios";

import { Grid, Box } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CheckIcon from "@mui/icons-material/Check";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";

import formatHttpApiError from 'src/helpers/formatHttpApiError';
import getCommonOptions from 'src/helpers/axios/getCommonOptions';
import StatCard from "./StatCard";

export default function WinsCompletion() {
    const [isLoading, setIsLoading] = useState(false);
    const [completionStats, setCompletionStats] = useState({
        completed: null,
        pending: null
    });
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setIsLoading(true);
        axios.get('/api/dashboard/wins-completion/', getCommonOptions())
            .then((res) => {
                const { data } = res;
                if (data) {
                    const stats = {};
                    data.forEach(d => {
                        if (d.completed === true) {
                            stats.completed = d.count;
                            return;
                        }
                        if (d.completed === false) {
                            stats.pending = d.count;
                        }
                    });
                    setCompletionStats(stats);
                    setIsLoading(false);
                }
            }).catch((err) => {
                const formattedError = formatHttpApiError(err);
                enqueueSnackbar(formattedError);
                setIsLoading(false);
            });
    }, [enqueueSnackbar, setIsLoading]);

    const totalWinsCount = (completionStats.pending || 0) + (completionStats.completed || 0);

    return (
        <Box sx={{
            flexGrow: 1,
            mb: (theme) => theme.spacing(2)
        }}>
            <Grid container spacing={3}>
                <StatCard
                    title="Total Wins"
                    value={totalWinsCount}
                    loading={isLoading}
                    icon={<AssignmentIcon fontSize="small" />}
                />
                <StatCard
                    title="Wins Due"
                    value={completionStats.pending || 0}
                    loading={isLoading}
                    icon={<AssignmentLateIcon fontSize="small" />}
                />
                <StatCard
                    title="Wins Completed"
                    value={completionStats.completed || 0}
                    loading={isLoading}
                    icon={<CheckIcon fontSize="small" />}
                />
            </Grid>
        </Box>
    );
}
