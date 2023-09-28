<script lang="ts">
  import {
    createTable,
    Render,
    Subscribe,
    createRender,
    Column,
  } from 'svelte-headless-table';
  import {
    addPagination,
    addSortBy,
    addTableFilter,
    addHiddenColumns,
    addSelectedRows,
  } from 'svelte-headless-table/plugins';
  import { ArrowUpDown, ChevronDown } from 'lucide-svelte';
  import { readable } from 'svelte/store';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import DataTableCheckbox from './data-table-checkbox.svelte';

  import * as Table from '$lib/components/ui/table';

  export let nextPage = () => {
    $pageIndex = $pageIndex + 1;
  };

  export let prevPage = () => {
    $pageIndex = $pageIndex - 1;
  };

  export let leftButton = () => {
    console.log('left');
  };

  export let rightButton = () => {
    console.log('right');
  };

  export let handleInput = (e: any) => {
    console.log(e.target.value);
  };

  export let data: any[] = [];

  const createTableColumns = () => {
    const columnStructure = Object.keys(data[0]).map((key) => {
      return table.column({
        accessor: key,
        header: key,
        // plugins: {
        //   sort: {
        //     disable: true,
        //   },
        //   filter: {
        //     exclude: true,
        //   },
        // },
      });
    });

    return columnStructure;
  };

  const table = createTable(readable(data), {
    page: addPagination(),
    sort: addSortBy(),
    filter: addTableFilter({
      fn: ({ filterValue, value }) =>
        value.toLowerCase().includes(filterValue.toLowerCase()),
    }),
    hide: addHiddenColumns(),
    select: addSelectedRows(),
  });

  const columnsFn = table.createColumns(createTableColumns());

  const columns = table.createColumns([
    table.column({
      accessor: 'ObjectId',
      header: (_, { pluginStates }) => {
        const { allPageRowsSelected } = pluginStates.select;
        return createRender(DataTableCheckbox, {
          checked: allPageRowsSelected,
        });
      },
      cell: ({ row }, { pluginStates }) => {
        const { getRowState } = pluginStates.select;
        const { isSelected } = getRowState(row);
        return createRender(DataTableCheckbox, {
          checked: isSelected,
        });
      },
    }),
    table.column({
      accessor: 'First name',
      header: 'First name',
      // plugins: {
      //   sort: {
      //     disable: true,
      //   },
      //   filter: {
      //     exclude: true,
      //   },
      // },
    }),
    table.column({
      accessor: 'Last name',
      header: 'Last name',
      // header: (_, { pluginStates }) => {
      //   const { allPageRowsSelected } = pluginStates.select;
      //   return createRender(DataTableCheckbox, {
      //     checked: allPageRowsSelected,
      //   });
      // },
      // cell: ({ row }, { pluginStates }) => {
      //   const { getRowState } = pluginStates.select;
      //   const { isSelected } = getRowState(row);
      //   return createRender(DataTableCheckbox, {
      //     checked: isSelected,
      //   });
      // },
      // plugins: {
      //   sort: {
      //     disable: true,
      //   },
      //   filter: {
      //     exclude: true,
      //   },
      // },
    }),
    table.column({
      accessor: 'Location',
      header: 'Location',
      // cell: ({ value }) => value,
      // plugins: {
      //   sort: {
      //     disable: true,
      //   },
      //   filter: {
      //     exclude: true,
      //   },
      // },
    }),
    table.column({
      accessor: 'Voice',
      header: 'Voice',
      plugins: {
        sort: {
          disable: true,
        },
        filter: {
          exclude: true,
        },
      },
    }),
    table.column({
      accessor: 'Non-voice',
      header: 'Non-voice',
      plugins: {
        sort: {
          disable: true,
        },
        filter: {
          exclude: true,
        },
      },
    }),
    table.column({
      accessor: 'Back Office',
      header: 'Back Office',
      plugins: {
        sort: {
          disable: true,
        },
        filter: {
          exclude: true,
        },
      },
    }),
    table.column({
      accessor: 'Status',
      header: 'Status',
      // plugins: {
      //   sort: {
      //     disable: true,
      //   },
      //   filter: {
      //     exclude: true,
      //   },
      // },
    }),
    // table.column({
    //   accessor: 'amount',
    //   header: 'Amount',
    //   cell: ({ value }) => {
    //     const formatted = new Intl.NumberFormat('en-US', {
    //       style: 'currency',
    //       currency: 'USD',
    //     }).format(value);
    //     return formatted;
    //   },
    //   plugins: {
    //     sort: {
    //       disable: true,
    //     },
    //     filter: {
    //       exclude: true,
    //     },
    //   },
    // }),
    // table.column({
    //   accessor: ({ email }) => email,
    //   header: '',
    //   cell: (item) => {
    //     return createRender(DataTableActions, { id: item.id });
    //   },
    //   plugins: {
    //     sort: {
    //       disable: true,
    //     },
    //   },
    // }),
  ]);

  const {
    headerRows,
    pageRows,
    tableAttrs,
    tableBodyAttrs,
    pluginStates,
    flatColumns,
    rows,
  } = table.createViewModel(columns);
  // } = table.createViewModel(columnsFn);

  const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
  const { filterValue } = pluginStates.filter;
  const { hiddenColumnIds } = pluginStates.hide;
  const { selectedDataIds } = pluginStates.select;

  const ids = flatColumns.map((col) => col.id);
  let hideForId = Object.fromEntries(ids.map((id) => [id, true]));
  $: $hiddenColumnIds = Object.entries(hideForId)
    .filter(([, hide]) => !hide)
    .map(([id]) => id);

  const currentLength = data.length;
  const totalLength = data.length;
</script>

<div>
  <!-- <div class="flex items-center py-4">
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild let:builder>
        
        
        <Button variant="outline" class="ml-auto" builders={[builder]}>
          Columns <ChevronDown class="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {#each flatColumns as col}
          {#if hidableCols.includes(col.id)}
            <DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
              {col.header}
            </DropdownMenu.CheckboxItem>
          {/if}
        {/each}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div> -->
  <div class="w-full rounded-md border p-6">
    <header class="w-full flex justify-between">
      <div class="flex gap-2 items-center">
        <h2 class="font-4xl whitespace-nowrap">Candidates ({totalLength})</h2>
        <Input
          class="max-w-sm"
          placeholder="Search for a candidate"
          type="text"
          bind:value={$filterValue}
          on:input={handleInput}
        />
      </div>
      <div class="flex items-center gap-4">
        <div class="flex items-center">
          {currentLength} of {totalLength}
          <div class="flex">
            <Button
              variant="ghost"
              size="sm"
              on:click={prevPage}
              disabled={!$hasPreviousPage}
            >
              <ChevronDown class="rotate-90" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              disabled={!$hasNextPage}
              on:click={nextPage}
            >
              <ChevronDown class="rotate-[-90deg]" />
            </Button>
          </div>
        </div>
        <Button on:click={leftButton} variant="outline">Export Data</Button>
        <Button on:click={rightButton}>Accept Cantidates</Button>
      </div>
    </header>
    <Table.Root class="border-none border-0" {...$tableAttrs}>
      <Table.Header class="border-1 border-b-2 border-b-black">
        {#each $headerRows as headerRow}
          <Subscribe rowAttrs={headerRow.attrs()}>
            <Table.Row>
              {#each headerRow.cells as cell (cell.id)}
                <Subscribe
                  attrs={cell.attrs()}
                  let:attrs
                  props={cell.props()}
                  let:props
                >
                  <Table.Head {...attrs} class="[&:has([role=checkbox])]:pl-3 ">
                    {#if cell.id === 'First name'}
                      <Button
                        class="w-full flex items-center justify-start pl-0 font-semibold"
                        variant="ghost"
                        on:click={props.sort.toggle}
                      >
                        <Render of={cell.render()} />
                        <ArrowUpDown class="w-4 h-4 ml-1" />
                      </Button>
                    {:else}
                      <Render of={cell.render()} />
                    {/if}
                  </Table.Head>
                </Subscribe>
              {/each}
            </Table.Row>
          </Subscribe>
        {/each}
      </Table.Header>
      <Table.Body {...$tableBodyAttrs}>
        {#each $pageRows as row (row.id)}
          <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
            <Table.Row {...rowAttrs}>
              {#each row.cells as cell (cell.id)}
                <Subscribe attrs={cell.attrs()} let:attrs>
                  <Table.Cell {...attrs} class="[&:has([role=checkbox])]:pl-3">
                    <Render of={cell.render()} />
                  </Table.Cell>
                </Subscribe>
              {/each}
            </Table.Row>
          </Subscribe>
        {/each}
      </Table.Body>
    </Table.Root>
  </div>
  <div class="flex items-center justify-end space-x-2 py-4">
    <div class="flex-1 text-sm text-muted-foreground">
      {Object.keys($selectedDataIds).length} of{' '}
      {$rows.length} row(s) selected.
    </div>
  </div>
</div>
